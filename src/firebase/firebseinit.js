import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAOffdcG5nz8Fly7blyv6x6Zoo5x59VAco",
  authDomain: "fire-blog-13f47.firebaseapp.com",
  projectId: "fire-blog-13f47",
  storageBucket: "fire-blog-13f47.appspot.com",
  messagingSenderId: "610547468730",
  appId: "1:610547468730:web:deb6a0204afd98af61b583",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore()
