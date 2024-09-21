import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKo8-24PiuMVMS-Mjz5UfTiokaTtpLRqw",
  authDomain: "linkedln-clone-a79e9.firebaseapp.com",
  projectId: "linkedln-clone-a79e9",
  storageBucket: "linkedln-clone-a79e9.appspot.com",
  messagingSenderId: "735673471332",
  appId: "1:735673471332:web:00e78d033dd6f1ee2e2a71",
  measurementId: "G-MFPXP0H77J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };


