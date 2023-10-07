// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4LNK2pmU0KC8PsFA6N1-tJf0TXOPBss0",
  authDomain: "educare-bbf11.firebaseapp.com",
  projectId: "educare-bbf11",
  storageBucket: "educare-bbf11.appspot.com",
  messagingSenderId: "141607139024",
  appId: "1:141607139024:web:1fae59451a5165f0dc90d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);