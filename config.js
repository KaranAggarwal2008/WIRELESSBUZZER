import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDueoSL8nUbnevzS1teBEP2P3uEvhXH8kQ",
  authDomain: "wireless-buzzer-51e02.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-51e02-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-51e02",
  storageBucket: "wireless-buzzer-51e02.appspot.com",
  messagingSenderId: "469660039386",
  appId: "1:469660039386:web:7337ec44ce6ee44f274de3",
  measurementId: "G-Q4Z4Q28N0Q"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
