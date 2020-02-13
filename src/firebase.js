import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectID: '',
    storageBucket: '',
    messageSenderID: '',
    apiId: '',
})

export {firebaseConfig as firebase};