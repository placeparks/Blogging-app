// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIhULSu-e2XTf1BeuBRBb8YG6uOux2NmE",
  authDomain: "blog-app-6ddff.firebaseapp.com",
  projectId: "blog-app-6ddff",
  storageBucket: "blog-app-6ddff.appspot.com",
  messagingSenderId: "315369123628",
  appId: "1:315369123628:web:8582437a918a6a5c044689"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();