
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA_d4KiUsm4r5nxnlAjvCIEQ2mHixUFCDE",
  authDomain: "ai-intern-32fab.firebaseapp.com",
  projectId: "ai-intern-32fab",
  storageBucket: "ai-intern-32fab.firebasestorage.app",
  messagingSenderId: "840175527912",
  appId: "1:840175527912:web:26159e9e7fd002e5dee65d",
  measurementId: "G-LGWG3FFPZM"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth , provider}