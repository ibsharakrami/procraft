# ProCraft - 403 Forbidden Troubleshooting Guide

## Problem: Getting "403 - Forbidden" Error

If you're seeing a 403 error when accessing your site, follow these steps:

---

## Solution 1: Check File Permissions

### **Via cPanel File Manager:**
1. Go to cPanel → File Manager
2. Navigate to `public_html`
3. Select ALL files and folders
4. Click "**Permissions**" or right-click → "**Change Permissions**"
5. Set permissions:
   - **Folders (directories):** 755
   - **Files:** 644
   - **`.htaccess`:** 644

### **Via SSH/Terminal:**
```bash
cd public_html
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

---

## Solution 2: Simplify .htaccess

If permissions are correct but still getting 403, try this **minimal `.htaccess`**:

```apache
# Minimal .htaccess for ProCraft

RewriteEngine On

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Custom 404
ErrorDocument 404 /404.html
```

Save this as `.htaccess` in `public_html` and test.

---

## Solution 3: Check Apache AllowOverride

The `.htaccess` file requires `AllowOverride All` in Apache config.

### **Check with hosting support:**
Contact your hosting support and ask:
> "Can you verify that AllowOverride is set to 'All' for my public_html directory?"

Most shared hosting has this enabled by default.

---

## Solution 4: Check Index File

Make sure `index.html` exists in `public_html`:

```bash
ls -la /path/to/public_html/index.html
```

If missing, your homepage won't load.

---

## Solution 5: Disable .htaccess Temporarily

Test if `.htaccess` is causing the issue:

1. Rename `.htaccess` to `.htaccess.backup`
2. Visit your site
3. If it works, the issue is in `.htaccess`
4. If it still shows 403, it's a server/permissions issue

---

## Solution 6: Check Apache Error Logs

### **Via cPanel:**
1. cPanel → "**Errors**" or "**Error Log**"
2. Look for recent 403 errors
3. The log will show the exact reason

Common errors:
- `Permission denied: /path/to/file`
- `Client denied by server configuration`
- `Directory index forbidden`

---

## Solution 7: Verify DirectoryIndex

Add this to your `.htaccess`:

```apache
DirectoryIndex index.html index.htm
```

This tells Apache to serve `index.html` as the default page.

---

## Solution 8: Contact Hosting Support

If none of the above work, contact your hosting support:

**Email Template:**
```
Subject: 403 Forbidden Error on procraft.ae

Hi Support Team,

I'm getting a "403 - Forbidden" error when accessing my website at https://procraft.ae

I have:
- Uploaded all files to public_html
- Set file permissions to 644 and folder permissions to 755
- Created a .htaccess file

Can you please:
1. Check if AllowOverride is enabled for public_html
2. Check Apache error logs for my domain
3. Verify that .htaccess files are allowed

Thank you!
```

---

## Working .htaccess Template

Here's a tested, working `.htaccess` for Next.js static export:

```apache
# Enable rewrite engine
RewriteEngine On
Options +FollowSymLinks -Indexes
DirectoryIndex index.html

# HTTPS redirect (comment out if causing issues)
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove trailing slashes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Handle subdirectories with index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}/index.html -f
RewriteRule ^(.+)$ $1/index.html [L]

# Error pages
ErrorDocument 404 /404.html
ErrorDocument 403 /404.html

# Security
<FilesMatch "^\.">
  Require all denied
</FilesMatch>
```

---

## Quick Test Checklist

- [ ] File permissions: 644 for files, 755 for directories
- [ ] `.htaccess` permissions: 644
- [ ] `index.html` exists in public_html root
- [ ] All files uploaded from `out` directory
- [ ] `.htaccess` file is in the root of public_html
- [ ] No extra `.htaccess` in subdirectories
- [ ] Apache error logs checked
- [ ] Browser cache cleared (Ctrl+Shift+R)

---

## Alternative: Test Without .htaccess

Upload your files and access pages WITH .html extension:
- https://procraft.ae/index.html
- https://procraft.ae/about.html
- https://procraft.ae/services.html

If these work, the issue is definitely the `.htaccess` rewrite rules.

---

## Still Not Working?

1. **Try Vercel** (Free, zero configuration):
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **Or use GitHub Pages** (Also free):
   - Push `out` folder to GitHub
   - Enable GitHub Pages in repo settings

---

Need more help? Share:
1. The exact error message
2. Apache error log output
3. Your hosting provider name
4. Screenshots of the file permissions
