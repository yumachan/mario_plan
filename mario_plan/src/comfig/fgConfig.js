import firebase from 'firebase/app';
import 'firebase/forestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCvX0Ijcj_1Pe2TNjz0awMesqBgTtdHTdY",
    authDomain: "marioplan-d5dd3.firebaseapp.com",
    databaseURL: "https://marioplan-d5dd3.firebaseio.com",
    projectId: "marioplan-d5dd3",
    storageBucket: "marioplan-d5dd3.appspot.com",
    messagingSenderId: "1051024792230",
    appId: "1:1051024792230:web:8ed5475cd3d68fb6"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:ture });
  export default firebase;