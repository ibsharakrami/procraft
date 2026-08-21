# ProCraft favicon setup

Three declarations, three real files, one source of truth.

| Served at          | File                    | Notes                          |
| ------------------ | ----------------------- | ------------------------------ |
| `/favicon.ico`     | `public/favicon.ico`    | real ICO, 16/32/48 PNG frames  |
| `/icon.png`        | `public/icon.png`       | 512×512, square                |
| `/apple-icon.png`  | `public/apple-icon.png` | 180×180                        |

Declared once, in `metadata.icons` in `app/layout.js`. Nothing else declares an icon.

## What was wrong before (2026-08-22)

- **`public/favicon.ico` was a raw 32×32 PNG with an `.ico` name.** Served as
  `image/x-icon`, so a client was told "ICO" and handed PNG bytes. Parsing it as
  an ICO yielded 2,573 phantom frames with gigabyte offsets inside a 1,787-byte
  file. It is now a genuine ICO built from `public/icon.png`.
- **Two declarations pointed at `/favicon_procraft.svg`, which does not exist** —
  once as `icon`, once as `mask-icon`. It 404s to the HTML page, so anything
  requesting an SVG icon received a document.
- **A hand-written `<link rel='icon' href='/favicon.svg?v=3'>` in the `<head>`
  also 404'd**, alongside a second hand-written tag duplicating `/favicon.ico`.
- **`app/icon.png` and `app/apple-icon.png` used the Next file conventions** and
  emitted their own tags on top of `metadata.icons` — which is how one page came
  to advertise six icons. `app/icon.png` was also **495×504, not square**, and
  Google requires a 1:1 aspect ratio. Both removed; the square `public/`
  equivalents are what serve now.

## Why it mattered

Google was showing this site's icon beside the **erp.procraft.ae** results and
labelling that subdomain "procraft.ae" — Google falls back to the domain-level
site identity for a subdomain it has not yet processed separately. So a broken
favicon here was the icon appearing on the ERP product's search results.

## Regenerating the ICO

Build it from `public/icon.png` with sharp: resize to 16/32/48, PNG-compress each
frame, then write a 6-byte ICO header, one 16-byte directory entry per frame, and
the frames. PNG-compressed frames inside an ICO are valid and standard — what is
not valid is a bare PNG renamed `.ico`.
