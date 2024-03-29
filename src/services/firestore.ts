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

export const db = firebase.firestore();

export const getWeddingPics = (limit: number): Promise<firebase.firestore.QuerySnapshot> => {
    return limit 
      ? db.collection('/pictures').limit(limit).get()
      : db.collection('/pictures').get();
};

export const getWeddingPic = (id: string): Promise<firebase.firestore.DocumentSnapshot> => {
    return db.collection('/pictures').doc(id).get();
}

export const getHousePics = (limit: number): Promise<firebase.firestore.QuerySnapshot> => {
    return limit 
      ? db.collection('/housePictures').orderBy('date').limit(limit).get()
      : db.collection('/housePictures').orderBy('date').get();
};

export const getHousePic = (id: string): Promise<firebase.firestore.DocumentSnapshot> => {
  return db.collection('/housePictures').doc(id).get();
}

export const getExperience = (): Promise<firebase.firestore.QuerySnapshot> => {
  return db.collection('/experience').get();
};

export const queryThen = (snapshot: firebase.firestore.QuerySnapshot) => {

}