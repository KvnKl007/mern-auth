// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-daaaf.firebaseapp.com",
  projectId: "mern-auth-daaaf",
  storageBucket: "mern-auth-daaaf.appspot.com",
  messagingSenderId: "105676225382",
  appId: "1:105676225382:web:f3f96a4161566ce6fa26a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);