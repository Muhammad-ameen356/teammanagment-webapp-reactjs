import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged  } from "firebase/auth";


const Firebaseconfig = {
    apiKey: "AIzaSyCiuKnzKD8rK81QbyMTG1_NMf0120NLht4",
    authDomain: "teammanagment-webapp.firebaseapp.com",
    projectId: "teammanagment-webapp",
    storageBucket: "teammanagment-webapp.appspot.com",
    messagingSenderId: "570793841687",
    appId: "1:570793841687:web:dbeb7052fabbb0a4cab852",
    measurementId: "G-17ZD0RNGRJ"
}

const app = initializeApp(Firebaseconfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stateChange = onAuthStateChanged;

export { db, Firebaseconfig, auth, stateChange };
