# ProCraft Static Site - Deployment Guide

## ✅ Build Complete!

Your Next.js site has been successfully converted to a static site and is ready for deployment.

---

## 📦 What Was Generated

The `out` directory contains your complete static website:

```
out/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── work.html               # Work/Portfolio page
├── contact.html            # Contact page
├── pricing.html            # Pricing page
├── 404.html                # Custom 404 page
├── .htaccess               # Apache configuration
├── work/                   # Dynamic case studies
│   ├── sharma-space.html
│   ├── virtual-greens.html
│   ├── carpenters-co.html
│   ├── aitm-university.html
│   └── alitqan-academy.html
├── _next/                  # Next.js assets (CSS, JS)
├── images/                 # All images
├── Font/                   # Custom fonts
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── manifest.webmanifest    # PWA manifest
└── *.png, *.mp4, etc.      # Other assets
```

**Total Size:** ~10 MB (including video)

---

## 🚀 How to Deploy to Your Shared Hosting (MySiteArea/cPanel)

### **Step 1: Access File Manager**
1. Login to your cPanel at: https://www.mysitearea.com/cpanel
2. Click on "**File Manager**"
3. Navigate to `public_html` directory

### **Step 2: Clean the Directory**
1. Select all existing files in `public_html`
2. Click "**Delete**" (make backup first if needed)
3. Empty the directory completely

### **Step 3: Upload Your Static Site**

**Option A: Using File Manager (GUI)**
1. Click "**Upload**" button
2. Select ALL files from the `out` directory
3. Upload them to `public_html`
4. Wait for upload to complete

**Option B: Using ZIP (Faster for multiple files)**
1. On your computer, go to the `out` directory
2. Create a ZIP file:
   ```bash
   cd /home/mohammed-azaan-peshmam/Desktop/ProCraft/procraft/out
   zip -r procraft-site.zip .
   ```
3. Upload `procraft-site.zip` to `public_html` via File Manager
4. Right-click the ZIP file → "**Extract**"
5. Delete the ZIP file after extraction

**Option C: Using FTP (FileZilla)**
1. Connect to your server via FTP:
   - Host: ftp.procraft.ae (or your server IP)
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21
2. Navigate to `public_html`
3. Upload all files from the `out` directory

### **Step 4: Verify File Structure**
Your `public_html` should look like this:
```
public_html/
├── .htaccess               ✅ IMPORTANT!
├── index.html
├── about.html
├── services.html
├── work.html
├── contact.html
├── _next/
├── images/
├── Font/
└── ... (all other files)
```

### **Step 5: Set Permissions (If Needed)**
1. Select `.htaccess` file
2. Right-click → "**Change Permissions**"
3. Set to: 644
4. Click "**Change Permissions**"

### **Step 6: Test Your Website**
Visit your domain: **https://procraft.ae**

**Test these pages:**
- ✅ https://procraft.ae (Homepage)
- ✅ https://procraft.ae/about
- ✅ https://procraft.ae/services
- ✅ https://procraft.ae/work
- ✅ https://procraft.ae/contact
- ✅ https://procraft.ae/work/sharma-space
- ✅ https://procraft.ae/pricing
- ✅ https://procraft.ae/404-test (404 page)

---

## 🔧 Common Issues & Solutions

### **Issue 1: 404 Errors on Pages**
**Solution:** Make sure `.htaccess` file is uploaded and has correct permissions (644)

### **Issue 2: CSS/Images Not Loading**
**Solution:** 
1. Check that `_next` and `images` folders are uploaded
2. Clear browser cache (Ctrl+Shift+R)
3. Check file permissions (755 for folders, 644 for files)

### **Issue 3: Redirect Loop**
**Solution:** 
1. Edit `.htaccess`
2. Comment out the HTTPS redirect lines if your host handles SSL differently:
   ```apache
   # RewriteCond %{HTTPS} off
   # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### **Issue 4: Contact Form Not Working**
**Solution:**
The contact form uses EmailJS (client-side). Make sure:
1. Your `.env.local` variables are correct
2. EmailJS service is active
3. Check browser console for errors

---

## 🌍 SSL Certificate (HTTPS)

### **Free SSL via cPanel:**
1. Go to cPanel → "**SSL/TLS Status**"
2. Click "**AutoSSL**" or "**Let's Encrypt**"
3. Enable for your domain: `procraft.ae`
4. Wait 5-10 minutes for certificate to activate

### **Verify HTTPS:**
Visit: https://procraft.ae (should show padlock icon)

---

## 📊 Performance Optimization (Already Included)

Your `.htaccess` file includes:
- ✅ Gzip Compression
- ✅ Browser Caching (1 year for images, 1 month for CSS/JS)
- ✅ Security Headers (XSS Protection, Clickjacking Prevention)
- ✅ HTTPS Redirect
- ✅ Clean URLs (no .html extension)

---

## 🔄 Updating Your Website

When you make changes:

```bash
# 1. Make your changes in the code
# 2. Rebuild the static site
npm run build

# 3. Upload the new files from 'out' directory to public_html
# (You can overwrite existing files)
```

**Quick Update via ZIP:**
```bash
cd out
zip -r procraft-site-update.zip .
# Upload and extract in cPanel
```

---

## 📱 Mobile Testing

Test on actual devices:
- Visit https://procraft.ae on your phone
- Check all pages and forms
- Test contact form submission
- Verify images and videos load

---

## 🎯 Next Steps

1. ✅ Upload files to `public_html`
2. ✅ Enable SSL certificate
3. ✅ Test all pages
4. ✅ Submit sitemap to Google Search Console
5. ✅ Set up Google Analytics (if needed)
6. ✅ Test contact form
7. ✅ Check mobile responsiveness

---

## 📞 Need Help?

If you encounter issues:
1. Check cPanel Error Logs: cPanel → "**Errors**"
2. Check browser console: F12 → Console tab
3. Contact your hosting support: support@mysitearea.com

---

## ✨ Your Site is Production Ready!

**Built:** December 4, 2025
**Framework:** Next.js 16.0.1 (Static Export)
**Total Pages:** 12 HTML pages
**Status:** ✅ Ready to Deploy

🚀 **Happy Deploying!**
