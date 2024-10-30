import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-APMmIdOM5z4ixRDTZhQT61PFU_LeXR0",
  authDomain: "medium-2o.firebaseapp.com",
  projectId: "medium-2o",
  storageBucket: "medium-2o.appspot.com",
  messagingSenderId: "1054110823481",
  appId: "1:1054110823481:web:7ce14791ae8e8b8a8589e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);