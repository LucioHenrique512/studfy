import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgqmDuap_hehi4tshS8xBZXduBs-b60fA",
  authDomain: "studfy-4dad9.firebaseapp.com",
  projectId: "studfy-4dad9",
  storageBucket: "studfy-4dad9.appspot.com",
  messagingSenderId: "70291854702",
  appId: "1:70291854702:web:339e0b04dce763059ddd7f",
  measurementId: "G-9S4REQMRX3",
};

firebase.initializeApp(firebaseConfig);
