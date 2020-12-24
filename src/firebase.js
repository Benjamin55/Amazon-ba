import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTPqyNqzsXM9Y2WJb3Yj09HpRUqehhUHo",
    authDomain: "ba-d4cd7.firebaseapp.com",
    projectId: "ba-d4cd7",
    storageBucket: "ba-d4cd7.appspot.com",
    messagingSenderId: "1081898550323",
    appId: "1:1081898550323:web:f34105c4e7d6408bc84f46",
    measurementId: "G-8QL7M3953C"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };