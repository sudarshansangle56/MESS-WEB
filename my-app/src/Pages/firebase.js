import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBahTJXJqMhldZwxptB2jyb-ElIXzq6SUQ",
    authDomain: "min-project-2bd27.firebaseapp.com",
    databaseURL: "https://min-project-2bd27-default-rtdb.firebaseio.com",
    projectId: "min-project-2bd27",
    storageBucket: "min-project-2bd27.appspot.com",
    messagingSenderId: "176927995466",
    appId: "1:176927995466:web:1a3c4178c9fa00551d98b3",
    measurementId: "G-1EBWJR0Z8H"
};


const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, push, onValue, remove };