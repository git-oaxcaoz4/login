import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
const  firebaseConfig = {
    apiKey: "AIzaSyD5yf05EOdPsNKPG6VjTM3_YoAVqEdA9y4",
    authDomain: "project-oaxacaosbd-3747b.firebaseapp.com",
    databaseURL: "https://project-oaxacaosbd-3747b.firebaseio.com",
    projectId: "project-oaxacaosbd-3747b",
    storageBucket: "project-oaxacaosbd-3747b.appspot.com",
    messagingSenderId: "996521059042",
    appId: "1:996521059042:web:7d4ef1d9e1a65199c5f4bb",
    measurementId: "G-V85LV2FD39"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots: true });

export default firebaseApp.firestore();
