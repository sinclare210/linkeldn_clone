import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; 
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKo8-24PiuMVMS-Mjz5UfTiokaTtpLRqw",
  authDomain: "linkedln-clone-a79e9.firebaseapp.com",
  projectId: "linkedln-clone-a79e9",
  storageBucket: "linkedln-clone-a79e9.appspot.com",
  messagingSenderId: "735673471332",
  appId: "1:735673471332:web:00e78d033dd6f1ee2e2a71",
  measurementId: "G-MFPXP0H77J"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Use named exports
export { auth, provider, db ,storage };
