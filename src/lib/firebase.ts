import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration from the user
const firebaseConfig = {
  apiKey: "AIzaSyBGZKiT0xYqc9lnRIA4hM0HnqSiSaR09O8",
  authDomain: "svadistha-a7dad.firebaseapp.com",
  projectId: "svadistha-a7dad",
  storageBucket: "svadistha-a7dad.firebasestorage.app",
  messagingSenderId: "403493255986",
  appId: "1:403493255986:web:2a23da83b2c11a80ebf52b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
