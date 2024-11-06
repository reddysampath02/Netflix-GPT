// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwZdlnyZQLXmVE6SUHAfDON2OPms3oXZE",
  authDomain: "netflixgpt-cf981.firebaseapp.com",
  projectId: "netflixgpt-cf981",
  storageBucket: "netflixgpt-cf981.appspot.com",
  messagingSenderId: "496274235707",
  appId: "1:496274235707:web:0091118e40a9df6181971e",
  measurementId: "G-RRQP2W347J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
