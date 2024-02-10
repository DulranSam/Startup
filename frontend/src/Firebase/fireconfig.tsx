import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGoRJrlWD-b9gLHV79u6Dzhr8tz5SlG8M",
  authDomain: "startup-97f6f.firebaseapp.com",
  projectId: "startup-97f6f",
  storageBucket: "startup-97f6f.appspot.com",
  messagingSenderId: "604798753344",
  appId: "1:604798753344:web:7d0c93cb51d7f305c35da5",
  measurementId: "G-ZHDZL9VT68",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //for auth!
export const googleAuth = new GoogleAuthProvider();
