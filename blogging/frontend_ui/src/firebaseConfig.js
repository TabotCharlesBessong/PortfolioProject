// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "twitter-react-3371b.firebaseapp.com",
  projectId: "twitter-react-3371b",
  storageBucket: "twitter-react-3371b.appspot.com",
  messagingSenderId: "532715213869",
  appId: "1:532715213869:web:a39dfdfe5ac5bab319d4a4",
  measurementId: "G-0EPXXRTT2V",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
