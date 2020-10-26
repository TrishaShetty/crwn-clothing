import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5MKZIxkFD2zwtGWRN43CoEjYKziNrALk",
    authDomain: "crwn-db-452d1.firebaseapp.com",
    databaseURL: "https://crwn-db-452d1.firebaseio.com",
    projectId: "crwn-db-452d1",
    storageBucket: "crwn-db-452d1.appspot.com",
    messagingSenderId: "572027971679",
    appId: "1:572027971679:web:30ac42d6f24d6b42c393ea",
    measurementId: "G-F64LX32SRW"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  