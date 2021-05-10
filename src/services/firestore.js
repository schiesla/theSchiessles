import firebase from "firebase/app"
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAHLV0LJDxFl6LKC3CI7oULqCzaPem_jBM",
  authDomain: "the-schiee-s.firebaseapp.com",
  databaseURL: "https://the-schiee-s.firebaseio.com",
  projectId: "the-schiee-s",
  storageBucket: "the-schiee-s.appspot.com",
  messagingSenderId: "162718333894",
  appId: "1:162718333894:web:737d8c3af4a8bdca8950c7"
});

const db = firebase.firestore();

export const getWeddingPics = (limit) => {
    return db.collection('/pictures')
        .limit(limit)
        .get();
};