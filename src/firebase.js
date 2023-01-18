// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYtdAMoJvPBdMU0Zyhp_im1yF9L6MqOuk",
  authDomain: "disneyplusclone-e028d.firebaseapp.com",
  projectId: "disneyplusclone-e028d",
  storageBucket: "disneyplusclone-e028d.appspot.com",
  messagingSenderId: "77155731872",
  appId: "1:77155731872:web:f42064a54372b86998bcc5",
  measurementId: "G-9YJE6Z3NH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export { auth, provider, storage };
export default db;
