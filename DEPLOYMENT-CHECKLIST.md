# ProCraft - Deployment Checklist for mysitearea Hosting

## 📋 Pre-Deployment

- [ ] **Build the project**: Run `npm run build` to generate the `/out` folder
- [ ] **Verify build success**: Check that `/out` folder contains all files
- [ ] **Backup existing site**: Download current `public_html` folder (if site is already live)
- [ ] **Verify SSL certificate**: Ensure SSL/TLS is enabled on mysitearea hosting

## 📤 Deployment Steps

### Step 1: Upload Files

- [ ] Connect to mysitearea via FTP/SFTP or cPanel File Manager
- [ ] Navigate to `public_html` directory
- [ ] Delete all old files (keep backup!)
- [ ] Upload **ALL** files from `/out` folder to `public_html`
- [ ] Verify `.htaccess` file was uploaded (it's hidden - enable "Show hidden files")

### Step 2: Set Permissions

Set these permissions via FTP client or cPanel:

- [ ] **Folders**: 755 (drwxr-xr-x)
- [ ] **Files**: 644 (-rw-r--r--)
- [ ] **.htaccess**: 644 (-rw-r--r--)
- [ ] **Video file**: 644 (bg-video-herosection-homepage.mp4)

### Step 3: Verify Apache Modules

Contact mysitearea support to ensure these modules are enabled:

- [ ] **mod_rewrite** - Required for clean URLs
- [ ] **mod_headers** - Required for security headers
- [ ] **mod_deflate** - Required for Gzip compression
- [ ] **mod_expires** - Required for caching rules
- [ ] **mod_brotli** - Optional (better compression)

**Message template for support:**
```
Hi mysitearea support,

I've deployed a static Next.js website and need the following Apache modules enabled:
- mod_rewrite (for URL rewriting)
- mod_headers (for security headers)
- mod_deflate (for compression)
- mod_expires (for caching)
- mod_brotli (optional, for better compression)

Please also ensure AllowOverride is set to "All" for my public_html directory.

Thank you!
```

## ✅ Post-Deployment Testing

### 1. Basic Functionality Tests

Test these URLs in your browser:

- [ ] **Homepage**: https://procraft.ae → Should load
- [ ] **About page**: https://procraft.ae/about → Should load (no .html)
- [ ] **Services page**: https://procraft.ae/services → Should load
- [ ] **Work page**: https://procraft.ae/work → Should load
- [ ] **Contact page**: https://procraft.ae/contact → Should load
- [ ] **Pricing page**: https://procraft.ae/pricing → Should load
- [ ] **Case study**: https://procraft.ae/work/sharma-space → Should load

### 2. Clean URLs Test

- [ ] Visit https://procraft.ae/about.html → Should redirect to /about
- [ ] Visit https://procraft.ae/services.html → Should redirect to /services
- [ ] Refresh any page (F5) → Should NOT show 404 error

### 3. HTTPS & WWW Redirect Test

- [ ] Visit http://procraft.ae → Should redirect to https://procraft.ae
- [ ] Visit https://www.procraft.ae → Should redirect to https://procraft.ae (if using OPTION A)
- [ ] Check browser address bar → Should show "Secure" padlock icon

### 4. 404 Error Page Test

- [ ] Visit https://procraft.ae/nonexistent-page → Should show custom 404.html page
- [ ] 404 page should have navigation and branding intact

### 5. Assets Loading Test

- [ ] **Hero video loads**: Check homepage video plays
- [ ] **Fonts load correctly**: Check Blatant and Urbanist fonts render
- [ ] **Images load**: Check all images load (portfolio, logos, etc.)
- [ ] **WhatsApp button**: Click WhatsApp button → Should open WhatsApp
- [ ] **Navigation works**: Test all menu links

### 6. Mobile Responsiveness Test

- [ ] Open site on mobile device or use browser DevTools
- [ ] Test navigation menu (hamburger menu)
- [ ] Check all pages are responsive
- [ ] Verify touch interactions work

## 🔍 Performance & Security Tests

### Performance Tests

Run these tests and check scores:

- [ ] **PageSpeed Insights**: https://pagespeed.web.dev/
  - Target: 90+ score
  - Check Core Web Vitals (LCP, FID, CLS)

- [ ] **GTmetrix**: https://gtmetrix.com/
  - Target: A grade for performance
  - Check: Compression enabled
  - Check: Caching enabled

- [ ] **WebPageTest**: https://www.webpagetest.org/
  - Test from multiple locations
  - Check: First contentful paint < 1.5s

### Security Tests

- [ ] **Security Headers**: https://securityheaders.com/
  - Target: A or A+ rating
  - Should show: HSTS, CSP, X-Frame-Options, etc.

- [ ] **SSL Labs**: https://www.ssllabs.com/ssltest/
  - Target: A or A+ rating
  - Verify SSL certificate is valid

- [ ] **Check headers manually**: Open browser DevTools → Network tab → Check response headers
  - ✅ `Strict-Transport-Security` header present
  - ✅ `Content-Security-Policy` header present
  - ✅ `X-Frame-Options: SAMEORIGIN` present
  - ✅ `Content-Encoding: gzip` present (compression working)
  - ✅ `Cache-Control` headers present

## 🐛 Troubleshooting

### Issue: "Internal Server Error" (500)

**Symptoms**: White page with "Internal Server Error"

**Solutions**:
1. Check Apache error logs in cPanel → Errors
2. Comment out sections of .htaccess one by one to find the problematic module
3. Contact mysitearea support to enable missing Apache modules

### Issue: Clean URLs Not Working

**Symptoms**: /about shows 404, but /about.html works

**Solutions**:
1. Verify .htaccess file is uploaded and in the root of public_html
2. Check if mod_rewrite is enabled (contact support)
3. Verify AllowOverride is set to "All" (contact support)
4. Test with this simplified .htaccess:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME}.html -f
   RewriteRule ^(.+?)/?$ $1.html [L]
   ```

### Issue: Security Headers Not Showing

**Symptoms**: securityheaders.com shows "F" rating

**Solutions**:
1. Check if mod_headers is enabled (contact support)
2. Test headers: `curl -I https://procraft.ae`
3. If headers still missing, host may not support mod_headers

### Issue: Compression Not Working

**Symptoms**: GTmetrix shows "F" for compression

**Solutions**:
1. Check if mod_deflate is enabled (contact support)
2. Test compression: `curl -H "Accept-Encoding: gzip" -I https://procraft.ae`
3. Look for `Content-Encoding: gzip` in response headers

### Issue: Video Not Streaming/Seeking

**Symptoms**: Cannot skip ahead in video

**Solutions**:
1. Check if byte-range requests are working: `curl -H "Range: bytes=0-1000" -I https://procraft.ae/bg-video-herosection-homepage.mp4`
2. Look for `Accept-Ranges: bytes` in response
3. Ensure video file permissions are 644

### Issue: WWW Redirect Not Working

**Symptoms**: www.procraft.ae doesn't redirect

**Solutions**:
1. Open .htaccess and verify Section 2 (HTTPS & WWW REDIRECT)
2. Choose OPTION A (www → non-www) or OPTION B (non-www → www)
3. Ensure only ONE option is uncommented
4. Clear browser cache (Ctrl+Shift+Delete)

### Issue: Fonts Not Loading (CORS Error)

**Symptoms**: Console shows "blocked by CORS policy"

**Solutions**:
1. Check Section 8 of .htaccess (FONT OPTIMIZATION)
2. Verify `Access-Control-Allow-Origin: *` header is set for fonts
3. Test: `curl -I https://procraft.ae/Font/Blatant.otf`

## 📊 Performance Expectations

After deployment, you should see:

| Metric | Target | Tool |
|--------|--------|------|
| **PageSpeed Score** | 90+ | PageSpeed Insights |
| **GTmetrix Grade** | A | GTmetrix |
| **First Contentful Paint** | < 1.5s | WebPageTest |
| **Time to Interactive** | < 3s | PageSpeed Insights |
| **Largest Contentful Paint** | < 2.5s | PageSpeed Insights |
| **Cumulative Layout Shift** | < 0.1 | PageSpeed Insights |
| **Security Headers** | A+ | securityheaders.com |
| **SSL Rating** | A+ | SSL Labs |

## 🎯 Optional Enhancements

After successful deployment, consider:

### 1. Cloudflare Integration (FREE)

- [ ] Create Cloudflare account
- [ ] Add procraft.ae domain
- [ ] Update nameservers at domain registrar
- [ ] Enable Cloudflare features:
  - Auto Minify (JS, CSS, HTML)
  - Brotli compression
  - Rocket Loader
  - Always Use HTTPS

**Benefits**: Better performance, DDoS protection, free CDN

### 2. Google Analytics Setup

- [ ] Create Google Analytics 4 property
- [ ] Add tracking code to site (if not already done)
- [ ] Verify tracking is working
- [ ] Set up conversion goals

### 3. Google Search Console

- [ ] Add procraft.ae to Search Console
- [ ] Submit sitemap: https://procraft.ae/sitemap.xml
- [ ] Monitor indexing status
- [ ] Fix any crawl errors

### 4. Uptime Monitoring

Set up monitoring with:

- [ ] **UptimeRobot** (free) - https://uptimerobot.com/
- [ ] Configure alerts (email/SMS when site is down)
- [ ] Monitor every 5 minutes

### 5. Backups

- [ ] Set up automatic backups in cPanel
- [ ] Download manual backup weekly
- [ ] Store backups in multiple locations (local + cloud)

## 📞 Support Contact

If you encounter issues:

**mysitearea Support:**
- Contact via support ticket
- Mention: "Need Apache modules enabled for Next.js static site"
- Provide this checklist for context

**ProCraft Developer:**
- Refer to `/out/.htaccess` for configuration
- Check `HTACCESS-GUIDE.md` for simplified version
- Review `CLAUDE.md` for project documentation

## ✅ Final Verification

Before marking deployment as complete:

- [ ] All pages load without errors
- [ ] Clean URLs work (no .html in URLs)
- [ ] HTTPS is enforced
- [ ] Security headers are present (check securityheaders.com)
- [ ] Compression is working (check GTmetrix)
- [ ] Caching is enabled (check browser DevTools)
- [ ] Video plays and streams correctly
- [ ] Fonts load without errors
- [ ] WhatsApp button works
- [ ] Contact form works (test submission)
- [ ] Mobile version works perfectly
- [ ] 404 page shows correctly
- [ ] PageSpeed score is 90+
- [ ] No console errors (check browser DevTools)

## 🎉 Deployment Complete!

Once all checkboxes are ticked, your ProCraft website is live and optimized!

**Next steps:**
1. Share the URL with stakeholders
2. Monitor analytics for traffic
3. Set up regular backups
4. Monitor uptime
5. Update content as needed

---

**Date Deployed**: _________________

**Deployed By**: _________________

**PageSpeed Score**: _________________

**GTmetrix Grade**: _________________

**Notes**:
_____________________________________
_____________________________________
_____________________________________
