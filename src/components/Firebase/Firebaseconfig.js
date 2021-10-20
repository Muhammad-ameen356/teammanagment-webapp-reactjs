import { initializeApp } from "firebase/app";

const Firebaseconfig = () => {
    // eslint-disable-next-line
    const app = initializeApp({
        apiKey: "AIzaSyCiuKnzKD8rK81QbyMTG1_NMf0120NLht4",
        authDomain: "teammanagment-webapp.firebaseapp.com",
        projectId: "teammanagment-webapp",
        storageBucket: "teammanagment-webapp.appspot.com",
        messagingSenderId: "570793841687",
        appId: "1:570793841687:web:dbeb7052fabbb0a4cab852",
        measurementId: "G-17ZD0RNGRJ"
    });
}

export default Firebaseconfig;
