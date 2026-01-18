// Firebase Configuration
// Replace these values with your actual Firebase project configuration
// You can find these values in your Firebase Console:
// 1. Go to Project Settings (gear icon)
// 2. Scroll down to "Your apps"
// 3. Click on the web app you created
// 4. Copy the configuration values

const firebaseConfig = {
  apiKey: "AIzaSyDoX3xfvkRzTqrBwIHm9RASKGNKPBEE-kg",
  authDomain: "portfolio-contact-form-feb09.firebaseapp.com",
  projectId: "portfolio-contact-form-feb09",
  storageBucket: "portfolio-contact-form-feb09.firebasestorage.app",
  messagingSenderId: "1088551060078",
  appId: "1:1088551060078:web:7dfc5f2bee817e2c225c7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
