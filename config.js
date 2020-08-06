import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD6mrX-DhkpX1RfrgO36GyRraAE-cRx80k",
    authDomain: "attendence-1aa46.firebaseapp.com",
    databaseURL: "https://attendence-1aa46.firebaseio.com",
    projectId: "attendence-1aa46",
    storageBucket: "attendence-1aa46.appspot.com",
    messagingSenderId: "559239780350",
    appId: "1:559239780350:web:0e50db0132690bf19bd2af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();