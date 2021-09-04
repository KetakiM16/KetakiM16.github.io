import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAWYGu1IwWCNP0X6LvR86hdJI4kGAUxXQg",
    authDomain: "linkedln-clone-fce15.firebaseapp.com",
    projectId: "linkedln-clone-fce15",
    storageBucket: "linkedln-clone-fce15.appspot.com",
    messagingSenderId: "353737356235",
    appId: "1:353737356235:web:54d3f76a8fb34a9964bc4e"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig)
   const db = firebaseApp.firestore();
   const auth = firebase.auth();


   export {db,auth};