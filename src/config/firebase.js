// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtKOdGKWh_oRxpYM-hfKqcDcMTgISrHM",
  authDomain: "contact-app-1ac8e.firebaseapp.com",
  projectId: "contact-app-1ac8e",
  storageBucket: "contact-app-1ac8e.appspot.com",
  messagingSenderId: "954594669226",
  appId: "1:954594669226:web:462be8657c6cdbfbbd16d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)