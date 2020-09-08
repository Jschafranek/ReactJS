import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDK2cFKpPbXW21qxTe7dDd8HjkxRtDLEU",
    authDomain: "fb-messenger-clone-b83f7.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-b83f7.firebaseio.com",
    projectId: "fb-messenger-clone-b83f7",
    storageBucket: "fb-messenger-clone-b83f7.appspot.com",
    messagingSenderId: "1007087544806",
    appId: "1:1007087544806:web:dcedfcc91e553e00f38e27",
    measurementId: "G-QCLWN36TME"
});

const db = firebaseApp.firestore();

export default db;