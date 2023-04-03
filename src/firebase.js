import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKuzYWlfM8Q-YXmb0Z6QGfY3AY0rKyntQ",
  authDomain: "blogline-88788.firebaseapp.com",
  projectId: "blogline-88788",
  storageBucket: "blogline-88788.appspot.com",
  messagingSenderId: "644309763657",
  appId: "1:644309763657:web:c000052264b6fa87cbe198",
  measurementId: "G-XZD8KLE91E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


// This line below is important to use db.
export const db = getFirestore(app);

