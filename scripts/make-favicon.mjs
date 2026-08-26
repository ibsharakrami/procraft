// Builds public/favicon.ico from public/icon.png using BMP/DIB frames.
//
// This site's favicon is what Bing shows beside the erp.procraft.ae results —
// Bing resolves that subdomain to procraft.ae, exactly as Google did until it
// separated them. So a broken favicon here is the icon on the ERP product's
// listings, not just on the agency site.
//
// WHY NOT PNG-COMPRESSED FRAMES. An ICO may hold either BMP/DIB frames (the
// original 1995 format) or PNG-compressed ones (introduced with Windows Vista).
// Ours held three PNG frames and Bing rendered a generic globe beside our
// results for weeks while showing real icons for other sites on the same page.
// The one nearby site Bing DOES render, procraftindia.com, ships a single
// BMP/DIB frame. Google accepts both; a legacy ICO decoder accepts only BMP.
//
// That is correlation, not proof — but BMP frames are universally supported,
// including by Google which already renders ours, so hedging costs a few KB and
// removes a whole hypothesis. If Bing still shows a globe after this, the cause
// is the parent-domain consolidation instead, and the evidence is cleaner for
// having eliminated this.
//
// Run: npm run favicon
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SIZES = [16, 32, 48];

/** One BMP/DIB frame: BITMAPINFOHEADER + bottom-up BGRA + a 1bpp AND mask. */
async function dibFrame(size) {
	const { data } = await sharp(join(ROOT, 'public/icon.png'))
		.resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.raw()
		.ensureAlpha()
		.toBuffer({ resolveWithObject: true });

	const header = Buffer.alloc(40);
	header.writeUInt32LE(40, 0);
	header.writeInt32LE(size, 4);
	header.writeInt32LE(size * 2, 8); // doubled: XOR bitmap + AND mask
	header.writeUInt16LE(1, 12); // planes
	header.writeUInt16LE(32, 14); // bits per pixel
	header.writeUInt32LE(0, 16); // BI_RGB, uncompressed

	// Bottom-up rows, and BGRA rather than RGBA — both are easy to get backwards,
	// so the build renders the result back out and compares it to the source.
	const xor = Buffer.alloc(size * size * 4);
	for (let y = 0; y < size; y++) {
		const src = (size - 1 - y) * size * 4;
		for (let x = 0; x < size; x++) {
			const s = src + x * 4,
				d = (y * size + x) * 4;
			// Alpha in a 32bpp BI_RGB frame is convention, not spec — a decoder that
			// treats the fourth byte as padding renders whatever RGB sits under the
			// transparent rounded corners, which came out as visible speckle when a
			// real decoder was pointed at the frame. Compositing over WHITE first and
			// keeping the alpha satisfies both readings: alpha-aware decoders get
			// rounded corners, alpha-blind ones get white ones.
			const a = data[s + 3] / 255;
			const over = (c) => Math.round(c * a + 255 * (1 - a));
			xor[d] = over(data[s + 2]);
			xor[d + 1] = over(data[s + 1]);
			xor[d + 2] = over(data[s]);
			xor[d + 3] = data[s + 3];
		}
	}
	// AND mask: zeroed (the 32bpp alpha channel carries transparency), but the
	// rows must still be present and padded to a 4-byte boundary.
	const maskRow = Math.ceil(size / 32) * 4;
	return Buffer.concat([header, xor, Buffer.alloc(maskRow * size)]);
}

const frames = [];
for (const s of SIZES) frames.push({ size: s, data: await dibFrame(s) });

const head = Buffer.alloc(6);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(frames.length, 4);

let offset = 6 + 16 * frames.length;
const dir = Buffer.concat(
	frames.map((f) => {
		const e = Buffer.alloc(16);
		e[0] = f.size;
		e[1] = f.size;
		e.writeUInt16LE(1, 4);
		e.writeUInt16LE(32, 6);
		e.writeUInt32LE(f.data.length, 8);
		e.writeUInt32LE(offset, 12);
		offset += f.data.length;
		return e;
	})
);

writeFileSync(
	join(ROOT, 'public/favicon.ico'),
	Buffer.concat([head, dir, ...frames.map((f) => f.data)])
);
console.log(`  wrote public/favicon.ico — ${frames.length} BMP/DIB frames (${SIZES.join('/')})`);
