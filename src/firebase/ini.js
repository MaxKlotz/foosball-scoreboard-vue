// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE6l3jiVmeSJE0Q54tcGoXPn6Kh-HAzPc",
  authDomain: "foosball-scoreboard.firebaseapp.com",
  projectId: "foosball-scoreboard",
  storageBucket: "foosball-scoreboard.appspot.com",
  messagingSenderId: "619978414737",
  appId: "1:619978414737:web:5130b1a1e8437841d7fd30",
  measurementId: "G-E25BM1KZ6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// init firestore service
const db = getFirestore();
const auth = getAuth();
export { app, db, auth }