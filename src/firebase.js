// Real-time database; allows you to get real-time updates when data's been modified

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBc59QjeE7A8UyyMs1nI-Yk3WSlzoJxC3Q",
    authDomain: "todoist-knockoff.firebaseapp.com",
    databaseURL: "https://todoist-knockoff.firebaseio.com",
    projectId: "todoist-knockoff",
    storageBucket: "todoist-knockoff.appspot.com",
    messagingSenderId: "1097813861045",
    appId: "1:1097813861045:web:37a0bdc8259d9e049114fc",
});

export { firebaseConfig as firebase };