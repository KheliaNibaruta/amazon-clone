import firebase from "firebase/compat";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYEhPmS5n7HTdMXoEK2yiJOvDU8CbLPk",
  authDomain: "clone-218ce.firebaseapp.com",
  projectId: "clone-218ce",
  storageBucket: "clone-218ce.appspot.com",
  messagingSenderId: "907187243192",
  appId: "1:907187243192:web:98b8338704fa8bcdae8c4d",
  measurementId: "G-GMXDPEX6SH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };