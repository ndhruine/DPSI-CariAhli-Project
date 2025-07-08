// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjXMpp1nohmkfEq5oTRfr8LLE_dBQuGwo",
  authDomain: "cari-ahli.firebaseapp.com",
  projectId: "cari-ahli",
  storageBucket: "cari-ahli.firebasestorage.app",
  messagingSenderId: "971040692754",
  appId: "1:971040692754:web:79bc4d72c0630d9912d6cb",
  measurementId: "G-5CF27VB9JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);