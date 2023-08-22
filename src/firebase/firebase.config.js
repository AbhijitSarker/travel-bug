// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_8qZKK_JwhsOUPEbbKEGOwg8-VVsibwY",
    authDomain: "travel--bug.firebaseapp.com",
    projectId: "travel--bug",
    storageBucket: "travel--bug.appspot.com",
    messagingSenderId: "442285464664",
    appId: "1:442285464664:web:a89f5c7447b8129b7d3e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;