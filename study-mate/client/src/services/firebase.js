// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn4g3Oyays5nBLhfVPfF_3YfkTAdjoK7M",
  authDomain: "studymate-45783.firebaseapp.com",
  projectId: "studymate-45783",
  storageBucket: "studymate-45783.firebasestorage.app",
  messagingSenderId: "671418712278",
  appId: "1:671418712278:web:4aa59e822a1c77b3488977",
  measurementId: "G-73NKZHLNVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

