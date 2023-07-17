

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPToXnDhtdaFft6ifFTvX4ipoZa-cBim8",
  authDomain: "devlinks-54c23.firebaseapp.com",
  projectId: "devlinks-54c23",
  storageBucket: "devlinks-54c23.appspot.com",
  messagingSenderId: "300852865953",
  appId: "1:300852865953:web:7b3150e20f8dfdb1deb9e0",
  measurementId: "G-E9RZDWN8HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)