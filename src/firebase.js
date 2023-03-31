// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOHBQ93gDtqor4cLzBUrW3nkbDOkH2XXw",
  authDomain: "blogline-abda3.firebaseapp.com",
  projectId: "blogline-abda3",
  storageBucket: "blogline-abda3.appspot.com",
  messagingSenderId: "891824297916",
  appId: "1:891824297916:web:7b9f520c3d44e0f4efbdb9",
  measurementId: "G-Q1Z16N0TLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);