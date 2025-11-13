# ProCraft Contact Page - Setup Guide

Your contact page has been fully implemented! Follow this guide to configure EmailJS and make your contact form fully functional.

## 📁 Files Created

### Components (11 files)
```
/components/Contact/
├── ContactPageClient.jsx    - Main client wrapper with Toaster
├── ContactHero.jsx          - Full-screen hero section
├── ContactForm.jsx          - Form with validation
├── ContactSidebar.jsx       - Contact info & office hours
├── ContactFormSection.jsx   - Split layout wrapper
├── ContactCTACards.jsx      - Quick action cards
├── ContactMap.jsx           - Google Maps embed
└── ContactFAQ.jsx          - FAQ accordion

/app/contact/
└── page.js                  - Main page with SEO metadata

/data/
└── contactData.js          - All static content & FAQs

/lib/
└── emailjs.js              - EmailJS configuration
```

### Configuration
```
.env.local.example          - Environment variables template
```

---

## 🚀 Quick Start (3 Steps)

### 1. Setup EmailJS (Free - 5 minutes)

**Step 1: Create Account**
- Go to https://www.emailjs.com/
- Click "Sign Up" and create a free account
- Verify your email

**Step 2: Add Email Service**
- In EmailJS dashboard, click "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the connection steps
- **Copy your Service ID** (e.g., `service_abc123`)

**Step 3: Create Email Template**
- Click "Email Templates" in sidebar
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello ProCraft Team,

You have received a new contact form submission from your website.

---
CONTACT DETAILS
---
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

---
SERVICE INTEREST
---
{{service}}

---
MESSAGE
---
{{message}}

---
This email was sent from the ProCraft contact form.
Reply to: {{from_email}}
```

- Click "Save"
- **Copy your Template ID** (e.g., `template_xyz789`)

**Step 4: Get Public Key**
- Click "Account" in sidebar
- Find "Public Key" section
- **Copy your Public Key** (e.g., `AbcD1234EfgH5678`)

---

### 2. Configure Environment Variables

**Create `.env.local` file** in project root:

```bash
cp .env.local.example .env.local
```

**Edit `.env.local`** and add your EmailJS credentials:

```env
# Required for contact form to work
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbcD1234EfgH5678

# Optional (for future enhancements)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_KEY=
```

⚠️ **Important**: Replace the example values with your actual EmailJS credentials!

---

### 3. Test the Contact Page

**Start development server:**
```bash
npm run dev
```

**Visit the contact page:**
```
http://localhost:3000/contact
```

**Test the form:**
1. Fill out all required fields
2. Click "Send Message"
3. You should see a success toast notification
4. Check your email (info@procraft.ae) for the test submission

---

## 🎨 Page Features

### ✅ Implemented Features

1. **Hero Section**
   - Full-screen gradient background
   - Animated headline and CTA
   - Scroll indicator animation
   - Smooth scroll to form

2. **Contact Form**
   - React Hook Form with Zod validation
   - Real-time inline error messages
   - EmailJS integration for static sending
   - Loading states with spinner
   - Success/error toast notifications
   - Form auto-reset after successful submission
   - Fields: Name, Email, Phone, Company (optional), Service, Message

3. **Contact Sidebar**
   - Contact info cards (phone, email, address)
   - Office hours with live open/closed status
   - Social media links with hover animations
   - Clickable tel:, mailto:, and maps links

4. **Quick Action Cards**
   - Schedule a Call (phone link)
   - WhatsApp Us (pre-filled message)
   - Email Us (mailto link)
   - Hover effects and animations

5. **Google Maps**
   - Interactive map embed
   - Business Bay, Dubai location
   - Overlay card with address
   - Get Directions button
   - Parking and metro info

6. **FAQ Accordion**
   - 8 pre-written questions & answers
   - Smooth expand/collapse animations
   - One-at-a-time opening pattern
   - "Still have questions?" CTA

7. **SEO & Metadata**
   - Complete SEO metadata
   - Open Graph tags
   - Canonical URL
   - Optimized keywords

---

## 📱 Responsive Design

The contact page is fully responsive:

**Mobile (<768px)**
- Stacked layout (form on top, sidebar below)
- 1-column CTA cards
- Touch-optimized buttons
- Smaller map height (400px)

**Tablet (768px-1024px)**
- 2-column CTA cards
- Medium map height (450px)
- Optimized spacing

**Desktop (>1024px)**
- 60/40 split (form/sidebar)
- 3-column CTA cards
- Large map height (500px)
- Sticky sidebar (future enhancement)

---

## 🎯 Form Validation Rules

All validation is handled by Zod schema:

- **Name**: 2-50 characters, required
- **Email**: Valid email format, required
- **Phone**: 10+ digits, valid phone format, required
- **Company**: Optional, any text
- **Service**: Must select one of 6 services, required
- **Message**: 20-1000 characters, required

Errors display inline in red below each field.

---

## 🛠️ Customization Guide

### Update Contact Information

Edit `/data/contactData.js`:

```javascript
export const contactInfo = {
  phone: '+971 545 866 866',      // Your phone
  email: 'info@procraft.ae',      // Your email
  address: 'Business Bay, Dubai, United Arab Emirates',
  coordinates: {
    lat: 25.1872,  // Your latitude
    lng: 55.2744   // Your longitude
  },
  // ... office hours
};
```

### Add/Remove FAQ Questions

Edit `/data/contactData.js`:

```javascript
export const faqs = [
  {
    id: 1,
    question: 'Your question here?',
    answer: 'Your detailed answer here.'
  },
  // Add more...
];
```

### Change Theme Colors

All colors use the ProCraft blue palette:
- Primary: `#10367D`
- Secondary: `#74B4D9`
- Success: `#10B981`
- Error: `#EF4444`

To change, update Tailwind classes in components.

### Modify Form Fields

Edit `/components/Contact/ContactForm.jsx`:

1. Update Zod schema (line 14)
2. Add field to form JSX (line 80+)
3. Update EmailJS template parameters (line 39)

---

## 📊 EmailJS Email Template Variables

Make sure your EmailJS template includes these variables:

```
{{from_name}}    - User's name
{{from_email}}   - User's email
{{phone}}        - User's phone number
{{company}}      - Company name (or "Not provided")
{{service}}      - Selected service
{{message}}      - User's message
{{to_email}}     - Your email (info@procraft.ae)
```

---

## 🚨 Troubleshooting

### "Email service is not configured" error

**Cause**: Environment variables not set correctly

**Solution**:
1. Check `.env.local` exists in project root
2. Verify all three EmailJS variables are set
3. Restart dev server: `npm run dev`

### Form submits but no email received

**Cause**: EmailJS template or service misconfigured

**Solution**:
1. Log into EmailJS dashboard
2. Check "Email History" to see delivery status
3. Verify email service is connected
4. Check template variables match exactly
5. Check spam/junk folder

### Toast notifications not showing

**Cause**: Toaster not rendering

**Solution**:
1. Check browser console for errors
2. Verify `react-hot-toast` is installed
3. Check Toaster component in `ContactPageClient.jsx`

### Map not loading

**Cause**: Google Maps embed issue

**Solution**:
- Map should work without API key (has default embed URL)
- Check browser console for errors
- Try different browser
- For production: Get Google Maps API key

---

## 📈 Production Deployment

Before deploying to production:

### 1. Environment Variables on Vercel/Netlify

Add these to your hosting platform:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. Test on Staging First

1. Deploy to staging environment
2. Test form submission end-to-end
3. Verify emails are received
4. Test all responsive breakpoints
5. Check all links work

### 3. Update URLs

In `contactData.js`, update:
- Social media URLs (currently placeholder `#`)
- Any other placeholder links

### 4. Add reCAPTCHA (Recommended)

To prevent spam:
1. Get reCAPTCHA v2 site key from Google
2. Add to `.env.local`
3. Update ContactForm to include reCAPTCHA widget

---

## 🎁 Future Enhancements (Optional)

### Already Prepared For:
- ✅ reCAPTCHA spam protection
- ✅ Google Maps API integration
- ✅ Custom email templates
- ✅ Multi-language support (data structure ready)

### Easy to Add:
- Calendly integration for scheduling
- WhatsApp Web API for chat
- Newsletter signup integration
- File upload for attachments
- Multi-step form wizard
- Live chat integration

---

## 📞 Support

If you need help:

1. **Check the code**: All components are well-commented
2. **EmailJS docs**: https://www.emailjs.com/docs/
3. **Next.js docs**: https://nextjs.org/docs
4. **Framer Motion docs**: https://www.framer.com/motion/

---

## ✨ Summary

**What's Working Now:**
- ✅ Beautiful, responsive contact page
- ✅ Full form validation
- ✅ Static form submission (works with `npm run build`)
- ✅ Toast notifications
- ✅ All sections with animations
- ✅ SEO optimized

**What You Need to Do:**
1. ⏰ Setup EmailJS account (5 minutes)
2. ⏰ Add credentials to `.env.local` (1 minute)
3. ⏰ Test the form (2 minutes)

**Total Setup Time: ~10 minutes**

---

Enjoy your beautiful new contact page! 🎉
