import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GV_BQtV6F3kdWjBDzF1RYg4f_g2vl2s",
  authDomain: "wireless-buzzer-app-a1801.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-a1801.firebaseio.com",
  projectId: "wireless-buzzer-app-a1801",
  storageBucket: "wireless-buzzer-app-a1801.appspot.com",
  messagingSenderId: "512601804012",
  appId: "1:512601804012:web:69b4763d95c7d4dc3ce9c9",
  measurementId: "G-HHHECXWLZT"
};
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();