# Email Notification Setup Guide

This guide shows you how to receive email notifications when someone submits your contact form.

---

## Option 1: Firebase Trigger Email Extension (Recommended - Free Tier Available)

This is the official Firebase solution and easiest to set up.

### Step 1: Install the Extension

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **portfolio-contact-form-feb09**
3. Click **Extensions** in the left sidebar
4. Click **Install extension**
5. Search for **"Trigger Email"**
6. Click **Install**

### Step 2: Configure SMTP Settings

You need an email service. Here are the easiest options:

#### **Option A: Gmail (Simplest for Personal Use)**

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Create an App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **SMTP Configuration:**
   ```
   SMTP Connection URI: smtps://your-email@gmail.com:your-app-password@smtp.gmail.com:465
   ```
   Replace `your-email@gmail.com` and `your-app-password` with your details

4. **Default FROM address:** your-email@gmail.com
5. **Default REPLY-TO address:** your-email@gmail.com

#### **Option B: SendGrid (Best for Production - Free 100 emails/day)**

1. Sign up at https://sendgrid.com/
2. Create an API Key
3. SMTP Configuration:
   ```
   SMTP Connection URI: smtps://apikey:YOUR_SENDGRID_API_KEY@smtp.sendgrid.net:465
   ```

### Step 3: Update Your Email Address

Open `assets/js/contact-form.js` and replace:
```javascript
to: 'your-email@example.com', // Replace with your email
```
With your actual email:
```javascript
to: 'desared.osmanllari@yourdomain.com', // Your email here
```

### Step 4: Test

1. Submit a test form
2. Check your email inbox
3. You should receive an email with the form details

---

## Option 2: Zapier (No Code Solution)

### Steps:

1. **Sign up for Zapier:** https://zapier.com/ (Free plan: 100 tasks/month)

2. **Create a Zap:**
   - Trigger: **Firestore** → "New Document in Collection"
   - Firebase Project: Select your project
   - Collection: `contacts`

3. **Action:**
   - Gmail → "Send Email"
   - To: Your email
   - Subject: "New Contact Form: {{subject}}"
   - Body:
     ```
     Name: {{name}}
     Email: {{email}}
     Subject: {{subject}}
     Message: {{message}}
     Time: {{timestamp}}
     ```

4. **Enable the Zap**

---

## Option 3: Make.com (Formerly Integromat)

Similar to Zapier, but with more free operations (1000/month):

1. Sign up: https://www.make.com/
2. Create scenario: Firebase Firestore → Email
3. Configure triggers and actions
4. Activate scenario

---

## Option 4: Firebase Cloud Functions (For Developers)

If you want more control and know JavaScript:

### Step 1: Initialize Firebase Functions

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize functions
firebase init functions
```

### Step 2: Create Email Function

Edit `functions/index.js`:

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure email transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

// Trigger when new document is added to contacts
exports.sendContactEmail = functions.firestore
  .document('contacts/{contactId}')
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com',
      replyTo: data.email,
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><small>Submitted: ${data.timestamp.toDate()}</small></p>
      `
    };

    return transporter.sendMail(mailOptions)
      .then(() => console.log('Email sent successfully'))
      .catch(error => console.error('Error sending email:', error));
  });
```

### Step 3: Deploy

```bash
firebase deploy --only functions
```

**Note:** This requires upgrading to Firebase Blaze (pay-as-you-go) plan, but still free for low usage.

---

## Option 5: Manual Check (No Setup Required)

If you don't need instant notifications:

1. **Bookmark Firebase Console:** https://console.firebase.google.com/
2. **Check regularly:**
   - Go to Firestore Database
   - Open "contacts" collection
   - Sort by timestamp to see newest first
3. **Mark as read:**
   - Click on each document
   - Change `read: false` to `read: true`

---

## Recommended Setup by Use Case

| Use Case | Recommendation | Cost | Setup Time |
|----------|---------------|------|------------|
| **Personal portfolio** | Firebase Trigger Email + Gmail | Free | 10 mins |
| **Professional site** | Firebase Trigger Email + SendGrid | Free (100/day) | 15 mins |
| **Need automation** | Zapier | Free (100/month) | 5 mins |
| **Developer with control** | Cloud Functions | Free (low usage) | 30 mins |
| **Low traffic** | Manual Check | Free | 0 mins |

---

## My Recommendation for You

**Use Firebase Trigger Email Extension + Gmail**

Why:
- ✅ Official Firebase solution
- ✅ Free for reasonable usage
- ✅ Easy to set up (10 minutes)
- ✅ Reliable delivery
- ✅ No third-party services needed
- ✅ Works with your existing Gmail

---

## Test Your Notifications

After setup, always test:

1. Go to your website: https://desared.com
2. Fill out the contact form with test data
3. Use your personal email as the sender
4. Submit the form
5. Check your inbox within 1-2 minutes

---

## Troubleshooting

### Not receiving emails?

1. **Check spam folder**
2. **Verify SMTP credentials** in Firebase Console
3. **Check Firebase Console → Extensions → Trigger Email → Logs**
4. **Test SMTP connection** using an online SMTP tester
5. **Check Firestore rules** - make sure writes are allowed

### Emails delayed?

- Free tiers may have slight delays
- Upgrade to paid plan for instant delivery

---

## Security Note

**IMPORTANT:** Never commit SMTP passwords or API keys to your code!
- Use Firebase Extensions (handles credentials securely)
- Or use environment variables in Cloud Functions
- Never hardcode passwords in `contact-form.js`

---

## Next Steps

1. Choose your preferred option (I recommend Option 1)
2. Follow the setup steps
3. Update your email in `assets/js/contact-form.js`
4. Commit and push changes
5. Test the form

Need help? Check the Firebase Extensions documentation or the FIREBASE_SETUP.md guide.
