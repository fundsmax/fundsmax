// Import the necessary Firebase modules
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDXcmzeLa90f8uAy0bKldDtgf9WBwu6uo",
  authDomain: "fundsmax-a4b4f.firebaseapp.com",
  projectId: "fundsmax-a4b4f",
  storageBucket: "fundsmax-a4b4f.appspot.com", // Ensure this is correct
  messagingSenderId: "988350061716",
  appId: "1:988350061716:web:81f17c2e4d941e3255e881"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };