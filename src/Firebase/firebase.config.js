// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlRdltEMq7edRmi9m3H7d9yENZiZBkDjk",
  authDomain: "event-management-e8023.firebaseapp.com",
  projectId: "event-management-e8023",
  storageBucket: "event-management-e8023.appspot.com",
  messagingSenderId: "244894590207",
  appId: "1:244894590207:web:9e91e651c30f2d353fd8ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);