# Firebase Contact Form Setup Guide

This guide will help you complete the setup of your Firebase-powered contact form.

## What's Been Done

✅ Replaced Google Form with custom HTML contact form
✅ Added Firebase SDK integration
✅ Created form submission handler with validation
✅ Added professional styling matching your website design
✅ Implemented success/error messages

## What You Need to Do

### Step 1: Add Your Firebase Configuration

1. Open the file `assets/js/firebase-config.js`

2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
	apiKey: "YOUR-API-KEY-HERE",           // Replace this
	authDomain: "YOUR-PROJECT-ID.firebaseapp.com",  // Replace this
	projectId: "YOUR-PROJECT-ID",          // Replace this
	storageBucket: "YOUR-PROJECT-ID.appspot.com",  // Replace this
	messagingSenderId: "YOUR-MESSAGING-SENDER-ID",  // Replace this
	appId: "YOUR-APP-ID"                   // Replace this
};
```

3. Save the file

### Step 2: Configure Firestore Security Rules

Your Firestore database is currently in "test mode" which is insecure. Let's secure it:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Firestore Database" in the left sidebar
4. Click the "Rules" tab
5. Replace the rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to the contacts collection
    match /contacts/{document=**} {
      allow read: if false; // No one can read (only you via Console)
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'subject', 'message', 'timestamp'])
                    && request.resource.data.name is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.email is string
                    && request.resource.data.email.matches('.*@.*\\..*')
                    && request.resource.data.subject is string
                    && request.resource.data.subject.size() > 0
                    && request.resource.data.message is string
                    && request.resource.data.message.size() > 0;
    }
  }
}
```

6. Click "Publish"

These rules:
- Allow anyone to **create** (submit) contact forms
- Validate that required fields are present and correctly formatted
- Prevent anyone from **reading** the data (only you can view via Firebase Console)
- Prevent spam by validating email format

### Step 3: Test the Form

1. Open your website locally:
   ```bash
   cd /Users/desared/Repos/desared.github.io
   python3 -m http.server 8000
   ```

2. Navigate to `http://localhost:8000`

3. Scroll to the contact form

4. Fill out and submit a test message

5. Check your Firebase Console > Firestore Database > contacts collection to see if the message appeared

### Step 4: View Submitted Messages

To view messages submitted through your contact form:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Firestore Database"
4. You'll see a "contacts" collection with all submitted messages
5. Each message contains:
   - name
   - email
   - subject
   - message
   - timestamp
   - read (boolean flag you can use to mark messages as read)

### Step 5: Set Up Email Notifications (Optional)

To receive email notifications when someone submits the form:

1. In Firebase Console, go to "Extensions"
2. Install "Trigger Email" extension
3. Configure it to send you an email whenever a new document is added to the "contacts" collection

OR use a third-party service like Zapier or Make.com to:
1. Watch for new Firestore documents in the "contacts" collection
2. Send you an email notification

## Form Features

✨ **Built-in Features:**
- Client-side validation (required fields, email format)
- Loading state (button shows "Sending..." while submitting)
- Success message with auto-dismiss after 5 seconds
- Error handling with user-friendly messages
- Responsive design (works on all devices)
- Professional styling matching your website

## Troubleshooting

### Issue: Form doesn't submit / Shows error message

**Solution:** Check browser console (F12) for errors. Common issues:
- Firebase config not properly set in `firebase-config.js`
- Firestore rules too restrictive
- Network/CORS issues (make sure you're testing on a server, not opening HTML file directly)

### Issue: "Permission denied" error

**Solution:** Your Firestore security rules are blocking writes. Review Step 2 above.

### Issue: Messages not appearing in Firebase

**Solution:**
1. Make sure Firestore is enabled (not Realtime Database)
2. Check that the collection name is "contacts"
3. Verify your security rules allow write access

## Security Best Practices

✅ **Current Security:**
- Firebase API key is public (this is safe - it's not a secret)
- Firestore rules prevent unauthorized reads
- Form validates data before submission
- Server-side timestamp prevents timestamp manipulation

⚠️ **Additional Recommendations:**
1. Add reCAPTCHA to prevent spam bots
2. Set up rate limiting to prevent abuse
3. Monitor usage in Firebase Console
4. Set up billing alerts

## Files Modified/Created

- `index.html` - Updated contact form section
- `assets/js/firebase-config.js` - Firebase configuration (YOU NEED TO EDIT THIS)
- `assets/js/contact-form.js` - Form submission handler
- `FIREBASE_SETUP.md` - This guide

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12 > Console)
2. Verify Firebase configuration is correct
3. Test Firestore rules in Firebase Console Rules playground
4. Check Firebase Console > Firestore > Contacts collection for submitted data

---

## Quick Start Checklist

- [ ] Add Firebase configuration to `assets/js/firebase-config.js`
- [ ] Update Firestore security rules
- [ ] Test form locally
- [ ] Verify messages appear in Firebase Console
- [ ] (Optional) Set up email notifications
- [ ] Commit and push changes to deploy

Once you complete these steps, your contact form will be fully functional!
