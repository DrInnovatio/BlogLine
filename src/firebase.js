// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6rwR4QXd4n7x3DseQhb8g0cOut48uFiM",
  authDomain: "bloglike-60994.firebaseapp.com",
  projectId: "bloglike-60994",
  storageBucket: "bloglike-60994.appspot.com",
  messagingSenderId: "956029760964",
  appId: "1:956029760964:web:85508643cd144bef62a091",
  measurementId: "G-F4FW6J5YTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);