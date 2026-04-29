# EmailJS Setup Guide

Your contact form now uses EmailJS to send messages automatically. Follow these steps to configure it:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

## 2. Set Up Email Service
1. In EmailJS dashboard, click **Email Services** → **Add New Service**
2. Choose **Gmail** (or your preferred email provider)
3. Click **Connect Account** and sign in with your Gmail
4. Grant permissions to EmailJS

## 3. Create Email Templates

### Template 1: For You (template_d25ciyg)
1. Click **Email Templates** → **Create New Template**
2. Use these settings:

**Template Name:** Portfolio Contact Form

**Subject:** New message from {{from_name}} via portfolio

**Content:**
```
Hello Hiba,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

### Template 2: Auto-Reply (template_11muixp)
1. Click **Email Templates** → **Create New Template**
2. Use these settings:

**Template Name:** Auto-Reply to Visitor

**Subject:** Thank you for your message - Hiba Shahid

**Content:**
```
Hello {{to_name}},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Your message:
{{message}}

Best regards,
Hiba Shahid
Full-Stack & AI Developer

---
Portfolio: https://hiba-portfolio.com
LinkedIn: https://www.linkedin.com/in/hiba-shahid-627366312/
GitHub: https://github.com/Hiba-Shahid
```

## 4. Get Your Credentials
From EmailJS dashboard, you'll need:
- **Service ID** (from Email Services page)
- **Template ID** (from Email Templates page) 
- **Public Key** (from Account → API Keys page)

## 5. Update Your Code
Replace the placeholder values in `src/components/Sections.jsx` (lines 199-203):

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID', // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID', // ← Replace with your Template ID  
  templateParams,
  'YOUR_PUBLIC_KEY' // ← Replace with your Public Key
);
```

## 6. Test Your Contact Form
1. Start your development server: `npm run dev`
2. Go to your portfolio contact section
3. Fill out the form and submit
4. Check your Gmail for the message

## Troubleshooting

**If emails don't arrive:**
- Check your Gmail spam folder
- Verify EmailJS service is connected properly
- Ensure all template variables match (`{{from_name}}`, `{{from_email}}`, etc.)

**If you get API errors:**
- Double-check your Service ID, Template ID, and Public Key
- Make sure your EmailJS account is verified

**Alternative:**
If EmailJS fails, the form will automatically fall back to opening the user's email client with pre-filled content.

## Need Help?
- EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Common issues: [https://www.emailjs.com/docs/troubleshooting/](https://www.emailjs.com/docs/troubleshooting/)
