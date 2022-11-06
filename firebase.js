// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "@react-native-firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwqT3l2lOZb9FC9pCe21BZxXIqb4FkJhg",
  authDomain: "rn-instagram-clone-ee54a.firebaseapp.com",
  projectId: "rn-instagram-clone-ee54a",
  storageBucket: "rn-instagram-clone-ee54a.appspot.com",
  messagingSenderId: "1097475573953",
  appId: "1:1097475573953:web:598628f1f04376ea48ec40",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export default firebase;
