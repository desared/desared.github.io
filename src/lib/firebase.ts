import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoX3xfvkRzTqrBwIHm9RASKGNKBEE-kg",
  authDomain: "portfolio-contact-form-feb09.firebaseapp.com",
  projectId: "portfolio-contact-form-feb09",
  storageBucket: "portfolio-contact-form-feb09.firebasestorage.app",
  messagingSenderId: "1088551060078",
  appId: "1:1088551060078:web:7dfc5f2bee817e2c225c7f",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
