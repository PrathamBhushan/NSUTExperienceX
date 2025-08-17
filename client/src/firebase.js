// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a72e6.firebaseapp.com",
  projectId: "mern-blog-a72e6",
  storageBucket: "mern-blog-a72e6.firebasestorage.app",
  messagingSenderId: "126953107200",
  appId: "1:126953107200:web:c3ca2cf3c893e73d28cde5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);