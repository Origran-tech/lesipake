import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "lesipake.firebaseapp.com",
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: "lesipake",
    storageBucket: "lesipake.appspot.com",
    messagingSenderId: "544640446362",
    appId: "1:544640446362:web:e1c5d42d963678fa3e5423",
    measurementId: "G-WJJWQY1VJF",
  });
}

export default firebase;