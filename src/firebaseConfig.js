import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: import.meta.env.VITE_AUTH ,
  projectId:  import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE ,
  messagingSenderId: import.meta.env.VITE_MESSAGING ,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// const auth = getAuth(app)