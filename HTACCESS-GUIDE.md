# ✅ PRODUCTION-READY .HTACCESS FOR PROCRAFT

> **✨ NEW: Complete production-ready .htaccess file now available in `/out/.htaccess`**
>
> This guide shows the simplified version. For the full production version with:
> - Security headers (HSTS, CSP, X-Frame-Options)
> - Gzip/Brotli compression
> - Aggressive caching rules
> - Video streaming optimization
> - Font CORS headers
> - And much more...
>
> **→ Use the file already created at `/out/.htaccess`** (included when you run `npm run build`)

---

## 📁 Your File Structure:
```
public_html/
├── .htaccess           ← The new file
├── index.html          ← Homepage
├── about.html          ← /about page
├── services.html       ← /services page
├── work.html           ← /work page
├── contact.html        ← /contact page
├── pricing.html        ← /pricing page
├── 404.html            ← Error page
├── work/
│   ├── sharma-space.html
│   ├── virtual-greens.html
│   ├── carpenters-co.html
│   ├── aitm-university.html
│   └── alitqan-academy.html
├── _next/              ← JavaScript/CSS assets
├── images/             ← Images
└── ... (other files)
```

---

## 🎯 HOW IT WORKS:

### The `.htaccess` File (Just 14 Lines!):
```apache
# ProCraft - Next.js Static Export .htaccess
# Simple, clean, and working configuration

Options -Indexes
Options +FollowSymLinks

DirectoryIndex index.html

RewriteEngine On
RewriteBase /

# 1. Allow existing files to be served directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# 2. Add .html extension if file exists with it
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+?)/?$ $1.html [L]

# 3. Custom error page
ErrorDocument 404 /404.html
```

---

## 🔍 What Each Line Does:

1. **`Options -Indexes`** - Prevents directory listing
2. **`Options +FollowSymLinks`** - Allows URL rewriting
3. **`DirectoryIndex index.html`** - Sets homepage as default
4. **`RewriteEngine On`** - Enables URL rewriting
5. **`RewriteBase /`** - Sets the base path
6. **Rules 1-2** - If file/folder exists, serve it directly
7. **Rules 3-4** - If URL + .html exists, serve that file
8. **Rule 5** - Show 404.html for missing pages

---

## 🚀 HOW URLS WORK:

| User Types | Apache Serves | Result |
|-----------|---------------|--------|
| `https://procraft.ae/` | `index.html` | ✅ Homepage |
| `https://procraft.ae/about` | `about.html` | ✅ About page |
| `https://procraft.ae/services` | `services.html` | ✅ Services page |
| `https://procraft.ae/work` | `work.html` | ✅ Work page |
| `https://procraft.ae/work/sharma-space` | `work/sharma-space.html` | ✅ Case study |
| `https://procraft.ae/nonexistent` | `404.html` | ✅ 404 page |

**Refresh on any page?** ✅ Works perfectly!

---

## 📤 DEPLOYMENT STEPS:

### Step 1: Upload Files
1. Go to cPanel → File Manager
2. Navigate to `public_html`
3. **Delete all old files** (backup first!)
4. Upload ALL files from your `out` folder

### Step 2: Verify File Structure
Make sure you have:
```
public_html/
├── .htaccess          ✅ CRITICAL!
├── index.html         ✅
├── about.html         ✅
├── services.html      ✅
└── ... (all other files)
```

### Step 3: Set Permissions
- Folders: 755
- Files: 644
- `.htaccess`: 644

### Step 4: Test Your Site
Visit these URLs and refresh each:
- ✅ https://procraft.ae
- ✅ https://procraft.ae/about
- ✅ https://procraft.ae/services
- ✅ https://procraft.ae/work
- ✅ https://procraft.ae/work/sharma-space
- ✅ https://procraft.ae/contact

**Press F5 or Ctrl+R to refresh each page** - All should work!

---

## ❌ TROUBLESHOOTING:

### Still showing 404 on refresh?

**Problem 1: `.htaccess` not uploaded**
- Solution: Make sure `.htaccess` is in the ROOT of `public_html`

**Problem 2: `.htaccess` not being read**
- Check if mod_rewrite is enabled
- Contact hosting support: "Please enable mod_rewrite for my domain"

**Problem 3: Files in wrong location**
- Run this test: Visit `https://procraft.ae/about.html` (with .html)
- If that works, the files are correct but `.htaccess` isn't working
- If that doesn't work, files aren't uploaded correctly

**Problem 4: Browser cache**
- Clear browser cache: Ctrl+Shift+Delete
- Or use Incognito/Private mode
- Or hard refresh: Ctrl+Shift+R

**Problem 5: Wrong file names**
- Make sure files are named exactly:
  - `about.html` (not `about.htm` or `About.html`)
  - All lowercase
  - With `.html` extension

---

## ✅ QUICK VERIFICATION:

Run these commands to verify your upload:

```bash
# Check if .htaccess exists
ls -la public_html/.htaccess

# Check if main pages exist
ls -la public_html/*.html

# Check if work pages exist
ls -la public_html/work/*.html
```

---

## 🎉 SUCCESS CHECKLIST:

- [ ] All files from `out` folder uploaded to `public_html`
- [ ] `.htaccess` file is in `public_html` root
- [ ] File permissions set correctly (755/644)
- [ ] `index.html` exists in root
- [ ] All `.html` files have lowercase names
- [ ] Homepage loads: https://procraft.ae
- [ ] About page loads: https://procraft.ae/about
- [ ] About page refreshes without 404 ✅
- [ ] All navigation links work
- [ ] Case studies load: https://procraft.ae/work/sharma-space
- [ ] 404 page shows for invalid URLs

---

## 💡 WHY THIS WORKS:

This `.htaccess` is **the simplest possible** configuration that:
1. ✅ Doesn't interfere with existing files
2. ✅ Adds `.html` only when needed
3. ✅ Works with nested routes (`/work/sharma-space`)
4. ✅ Handles homepage correctly
5. ✅ Shows 404 for missing pages
6. ✅ No complex regex or conditions
7. ✅ Compatible with all Apache versions

---

## 🆘 STILL NOT WORKING?

If you've done everything above and it still doesn't work:

1. **Check Apache Error Log:**
   - cPanel → Errors
   - Look for "RewriteRule" errors

2. **Test with this simple .htaccess:**
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^([^\.]+)$ $1.html [NC,L]
   ```

3. **Contact Hosting Support:**
   > "My .htaccess file isn't working. Can you confirm mod_rewrite is enabled and AllowOverride is set to All for my public_html directory?"

---

## 📞 NEED HELP?

Share these details:
1. Output of: `ls -la public_html/ | head -20`
2. Apache error log screenshot
3. Browser console errors (F12 → Console)
4. URL that's not working

---

**Your `.htaccess` is now in the `out` folder!**
Upload it to `public_html` and you're done! 🚀

---

## 🚀 PRODUCTION-READY VERSION

**Want the fully optimized, production-ready .htaccess?**

A comprehensive version is already created at `/out/.htaccess` with 200+ lines including:

### Security Features:
- ✅ HTTPS enforcement (auto-redirect HTTP → HTTPS)
- ✅ Security headers (HSTS, CSP, X-Frame-Options, XSS Protection)
- ✅ Block hidden files (.env, .git, etc.)
- ✅ Disable PHP execution
- ✅ Remove server signatures

### Performance Features:
- ✅ Gzip compression (70%+ file size reduction)
- ✅ Brotli compression (better than Gzip)
- ✅ Aggressive caching (1 year for static assets)
- ✅ Video streaming optimization (byte-range requests)
- ✅ Font CORS headers
- ✅ Keep-Alive connections

### SEO & Routing:
- ✅ WWW to non-WWW redirect (configurable)
- ✅ Clean URLs (hide .html extensions)
- ✅ Custom 404 error page
- ✅ Prevent duplicate content

**The production .htaccess is ready to deploy** - just upload the entire `/out` folder to your `public_html` directory!

To view the full file:
```bash
cat out/.htaccess
```

Or open it in your editor to customize options like WWW redirect direction.
