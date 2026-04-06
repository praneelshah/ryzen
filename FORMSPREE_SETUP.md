# Formspree Setup Instructions

To enable email functionality for the contact form, you need to set up Formspree (free tier available):

## 1. Create a Formspree Account
1. Go to https://formspree.io/
2. Sign up for a free account (no credit card required)
3. Verify your email

## 2. Create a New Form
1. In your Formspree dashboard, click "Create a new form"
2. Set the form name (e.g., "Contact Form")
3. Set the email address to receive submissions: **praneelshah.india@gmail.com**
4. Copy the form endpoint URL (it will look like: https://formspree.io/f/xxxxxxxx)

## 3. Update Environment Variables
Update the `.env` file in your project root with your Formspree endpoint:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_actual_form_id
```

## 4. Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (praneelshah.india@gmail.com) for the submission

## Formspree Free Tier Limits
- 50 submissions per month
- 2 forms
- Basic email notifications
- No file uploads

## Email Format
Formspree will send emails containing:
- Name
- Contact Type (Email/WhatsApp)
- Contact Value
- Business Challenge
- Reply-to address (if email contact)

## Troubleshooting
- Make sure the VITE_FORMSPREE_ENDPOINT is set correctly in your .env file
- Check the browser console for any network errors
- Verify your Formspree account hasn't exceeded the free tier limits
- Form submissions may take a few minutes to arrive in your inbox