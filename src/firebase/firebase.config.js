// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzg93PJi4xxjQ0pmn7AKn_jXano1Cm1OQ",
  authDomain: "coffee-store-2f45d.firebaseapp.com",
  projectId: "coffee-store-2f45d",
  storageBucket: "coffee-store-2f45d.appspot.com",
  messagingSenderId: "127190958393",
  appId: "1:127190958393:web:5c4b495f22bd81a38fa8e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
