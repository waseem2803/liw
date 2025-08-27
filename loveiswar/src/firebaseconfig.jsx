// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4mctRGimAtHNDF5OSFNOVi5l3GTtB6Nw",
  authDomain: "liwcomment-3f100.firebaseapp.com",
  projectId: "liwcomment-3f100",
  storageBucket: "liwcomment-3f100.firebasestorage.app",
  messagingSenderId: "704428970217",
  appId: "1:704428970217:web:192bd666a303119ad82078",
  measurementId: "G-TDYFVWMW7Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth= getAuth(app);
