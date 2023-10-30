import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyByNv7X7cniioSTpqM9tk-IQ7cTDU1xQIU",
  authDomain: "comision-47225.firebaseapp.com",
  projectId: "comision-47225",
  storageBucket: "comision-47225.appspot.com",
  messagingSenderId: "279016320111",
  appId: "1:279016320111:web:e813373b0765e14311719a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// const auth = getAuth(app)