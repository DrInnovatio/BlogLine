// Import the functions you need from the SDKs you need
import firebase from './firebase';

var firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyAOHBQ93gDtqor4cLzBUrW3nkbDOkH2XXw",
    authDomain: "blogline-abda3.firebaseapp.com",
    projectId: "blogline-abda3",
    storageBucket: "blogline-abda3.appspot.com",
    messagingSenderId: "891824297916",
    appId: "1:891824297916:web:7b9f520c3d44e0f4efbdb9",
    measurementId: "G-Q1Z16N0TLG"

});


var db = firebaseApp.firestore();

export { db };