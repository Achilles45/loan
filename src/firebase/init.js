import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPurF0IUACKbETkOYazuP8aUHC5_b-znc",
  authDomain: "networth-470bb.firebaseapp.com",
  databaseURL: "https://networth-470bb.firebaseio.com",
  projectId: "networth-470bb",
  storageBucket: "networth-470bb.appspot.com",
  messagingSenderId: "545118497454",
  appId: "1:545118497454:web:a863ecc3e3338ed98f5b3f",
  measurementId: "G-DW73CSYZP1"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();