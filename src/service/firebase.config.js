// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBXMvWoH4XkmdqbYVFxZ24iKoNZWs1Etbc",
  authDomain: "alertarecifemobile.firebaseapp.com",
  projectId: "alertarecifemobile",
  storageBucket: "alertarecifemobile.appspot.com",
  messagingSenderId: "1037486165813",
  appId: "1:1037486165813:web:98bca5d785c3bf7374067c",
  measurementId: "G-MEZCNCPJ64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
