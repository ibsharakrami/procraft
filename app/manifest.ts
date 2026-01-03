import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'ProCraft - Creative Digital Growth Agency',
		short_name: 'ProCraft',
		description:
			'Award-winning creative digital agency in Dubai specializing in business consulting, web design, e-commerce, digital marketing, SEO, and branding.',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#10367D',
		orientation: 'portrait-primary',
		icons: [
			{
				src: '/images/NewLogo_procraft.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/images/NewLogo_procraft.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable',
			},
			{
				src: '/icon.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: '/apple-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		categories: ['business', 'productivity', 'marketing'],
		lang: 'en',
		dir: 'ltr',
	};
}
