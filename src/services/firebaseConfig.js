import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJxXyhelSdqRQbhjC_UJC3GpXVXUQy0x4",
    authDomain: "brand-c3609.firebaseapp.com",
    projectId: "brand-c3609",
    storageBucket: "brand-c3609.appspot.com",
    messagingSenderId: "522477277943",
    appId: "1:522477277943:web:f7a28739abd196bf3bf9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)