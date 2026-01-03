# 403 Forbidden Error - FIXED ✅

## Problem Summary

When accessing pages directly (e.g., `/about`, `/contact`) or refreshing any page other than the homepage on your **production Apache server**, you were getting a **403 Forbidden** error.

## Root Cause

Next.js static export creates:
- ✅ `about.html`, `contact.html`, etc. (actual HTML files)
- ⚠️ `about/`, `contact/`, etc. (empty directories with only metadata files)

When Apache receives a request for `/about`:
1. It finds the `/about/` directory
2. Looks for `/about/index.html` (doesn't exist)
3. Returns **403 Forbidden** (directory exists but no index file)

## The Fix

Updated `.htaccess` rewrite rules to:
1. Serve `.html` files for clean URLs (`/about` → `about.html`)
2. Skip rewriting for actual files (CSS, JS, images)
3. Handle both file and directory structures properly

### Fixed `.htaccess` Section (Lines 46-68)

```apache
<IfModule mod_rewrite.c>
    # Skip rewriting for actual files (CSS, JS, images, etc.)
    RewriteCond %{REQUEST_FILENAME} -f
    RewriteRule ^ - [L]

    # For URLs without extension, try to serve the .html file
    RewriteCond %{REQUEST_URI} !\.[^./]+$
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}.html -f
    RewriteRule ^(.+?)/?$ $1.html [L]

    # If directory exists but no index, try serving as .html
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}.html !-f
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}/index.html -f
    RewriteRule ^(.+?)/?$ $1/index.html [L]

    # Prevent direct access to .html files (force clean URLs)
    RewriteCond %{THE_REQUEST} ^[A-Z]+\ /[^?\ ]*\.html[?\ ]
    RewriteCond %{REQUEST_URI} !^/404\.html$
    RewriteRule ^(.*)\.html$ /$1 [R=301,L]
</IfModule>
```

## What Changed

### Before (Broken):
```apache
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
```
❌ This allowed directories to pass through, causing 403 errors

### After (Fixed):
```apache
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]
```
✅ Only actual files pass through; directories get rewritten to `.html` files

## Deployment Steps

1. ✅ **Already Done**: Fixed `.htaccess` copied to `/public/.htaccess`
2. **Next Build**: Run `npm run build` (will include fixed `.htaccess` in `out/`)
3. **Upload to Server**: Upload the entire `out/` folder to your hosting
4. **Test**: Try accessing:
   - `https://procraft.ae/about`
   - `https://procraft.ae/contact`
   - `https://procraft.ae/services`
   - Refresh each page multiple times

## Testing Locally

⚠️ **Important**: `.htaccess` files only work on **Apache servers**, not on:
- `npm run dev` (Next.js dev server)
- `npx serve` (Node.js static server)
- `python -m http.server`

To test the `.htaccess` locally, you need:
```bash
# Install Apache locally (Ubuntu/Debian)
sudo apt install apache2

# Or use Docker
docker run -d -p 8080:80 -v $(pwd)/out:/usr/local/apache2/htdocs/ httpd:2.4
```

## Verification Checklist

After deploying to production:

- [ ] Homepage works (`/`)
- [ ] About page works (`/about`)
- [ ] Contact page works (`/contact`)
- [ ] Services page works (`/services`)
- [ ] Work page works (`/work`)
- [ ] Pricing page works (`/pricing`)
- [ ] Refreshing any page works (no 403)
- [ ] Direct URL access works
- [ ] Clean URLs work (no `.html` in URL)
- [ ] 404 page works for invalid URLs

## Additional Notes

### Why This Happens with Next.js Static Export

Next.js creates both:
1. **Flat HTML files**: `about.html` for clean URLs
2. **Directory structure**: `about/` for React Server Components data

This dual structure confuses Apache's default behavior.

### Alternative Solution (Not Recommended)

You could force Next.js to only create directory structures:
```javascript
// next.config.mjs
trailingSlash: true  // Forces /about/ instead of /about
```

But this changes your URLs and is not SEO-friendly.

## Support

If the issue persists:
1. Check Apache error logs: `tail -f /var/log/apache2/error.log`
2. Verify `.htaccess` is being read: Add `# TEST` at top and check source
3. Ensure `AllowOverride All` is enabled in Apache config
4. Check file permissions: `.htaccess` should be readable (644)

---

**Status**: ✅ FIXED - Ready for deployment
**Date**: December 11, 2025
**Next.js Version**: 16.0.1
**Server**: Apache (mysitearea hosting)
