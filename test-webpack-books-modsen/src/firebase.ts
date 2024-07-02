import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyClCm-rEgwrSBygLqdk1VVI0_0KBaySByc",
  authDomain: "modsenokulichtestproject.firebaseapp.com",
  projectId: "modsenokulichtestproject",
  storageBucket: "modsenokulichtestproject.appspot.com",
  messagingSenderId: "961260213191",
  appId: "1:961260213191:web:9087143bc1cbdde44a7fe2",
  measurementId: "G-Z6FNM2VTZ1"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const firebaseData = {
  database: getFirestore(app),
  authProvider: provider
}