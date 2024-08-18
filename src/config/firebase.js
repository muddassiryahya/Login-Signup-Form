import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCtXobs-xJkngj14OKyYOlEDdRHs_r6es",
    authDomain: "learning-firebase-a34a3.firebaseapp.com",
    projectId: "learning-firebase-a34a3",
    storageBucket: "learning-firebase-a34a3.appspot.com",
    messagingSenderId: "83218826012",
    appId: "1:83218826012:web:a266d5414cf300736670d9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app,
    createUserWithEmailAndPassword,
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged
}