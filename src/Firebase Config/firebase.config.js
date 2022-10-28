// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNy9bJoQKGMhUu5lJ3-t5ibwRbXN6ST3Q",
    authDomain: "future-learn-f78c1.firebaseapp.com",
    projectId: "future-learn-f78c1",
    storageBucket: "future-learn-f78c1.appspot.com",
    messagingSenderId: "1049628222534",
    appId: "1:1049628222534:web:ac2d7a9af23bf380d35647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;