
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiintern-529e6.firebaseapp.com",
  projectId: "aiintern-529e6",
  storageBucket: "aiintern-529e6.firebasestorage.app",
  messagingSenderId: "384317762399",
  appId: "1:384317762399:web:004a9060e04a4703e964ea"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth , provider}