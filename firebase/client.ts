// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD4WdqpvLIii7ESXO3xQLfjmEIXAqhhDGw",
  authDomain: "prepulse-2d7b6.firebaseapp.com",
  projectId: "prepulse-2d7b6",
  storageBucket: "prepulse-2d7b6.firebasestorage.app",
  messagingSenderId: "457838679402",
  appId: "1:457838679402:web:bf7c723fb34e38355f0113",
  measurementId: "G-0884CP81X3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);