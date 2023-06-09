// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgmZPPBJa_qYH05B2wJbI8L_YkGpH5pJQ",
    authDomain: "der-orden.firebaseapp.com",
    databaseURL: "https://der-orden-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "der-orden",
    storageBucket: "der-orden.appspot.com",
    messagingSenderId: "47878062786",
    appId: "1:47878062786:web:b5f57ff581b64d35c9f15b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);