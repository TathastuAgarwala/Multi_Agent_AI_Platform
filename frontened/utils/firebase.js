// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "leafai-a4e8b.firebaseapp.com",
  projectId: "leafai-a4e8b",
  storageBucket: "leafai-a4e8b.firebasestorage.app",
  messagingSenderId: "588388680665",
  appId: "1:588388680665:web:f355c9103b6c7fb0bc8fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider()
