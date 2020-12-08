import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLCoOnRmDNx2Alb3JadSa-x30wn6Ita9E",
  authDomain: "firegram-d5b4e.firebaseapp.com",
  projectId: "firegram-d5b4e",
  storageBucket: "firegram-d5b4e.appspot.com",
  messagingSenderId: "560678921",
  appId: "1:560678921:web:d94517e408d01a952dd0d8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
