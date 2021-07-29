import firebase from "firebase/app";
import "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, description, pseudo } = req.body;
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
      } else {
        firebase.app(); // if already initialized, use that one
      }
      const firestore = firebase.firestore();
      const articleRef = await firestore.collection("articles").add({
        title,
        description,
        pseudo,
      });
      if (articleRef.id) {
        res.json({ message: "success" });
      } else {
        res.send("error");
      }
    } catch (err) {
      res.send("error");
    }
  }
}
