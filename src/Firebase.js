// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCklQRN0UJ7lGgz62jR_VioBWDk92VgWgo",
  authDomain: "cariahli.firebaseapp.com",
  projectId: "cariahli",
  storageBucket: "cariahli.firebasestorage.app",
  messagingSenderId: "66306188345",
  appId: "66306188345:web:890e860c860f2c7bfc59e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
