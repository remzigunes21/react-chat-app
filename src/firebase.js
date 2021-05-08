import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWzpmxq0rnh1ictBmyfox6FQ4zvh0LhC0",
  authDomain: "social-app-6c285.firebaseapp.com",
  projectId: "social-app-6c285",
  storageBucket: "social-app-6c285.appspot.com",
  messagingSenderId: "412571813984",
  appId: "1:412571813984:web:5892b84767b2e581a79b05",
  measurementId: "G-DMDHZZZ519",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
