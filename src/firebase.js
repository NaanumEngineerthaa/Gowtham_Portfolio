// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ✅ ADDED THIS: Import the Firestore database function
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZBYXYs-_UIvLPZpaTbSLEFaCWE41MGY",
  authDomain: "gowtham-portfolio-4e0cb.firebaseapp.com",
  projectId: "gowtham-portfolio-4e0cb",
  storageBucket: "gowtham-portfolio-4e0cb.firebasestorage.app",
  messagingSenderId: "677585182838",
  appId: "1:677585182838:web:788eb3f84e8730c6057f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ ADDED THIS: Initialize the database and export it so your other files can use it!
export const db = getFirestore(app);