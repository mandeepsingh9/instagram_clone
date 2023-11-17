import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAULSozLgROvto254EBeSaccEBNr7-Wsh0",
  authDomain: "instagram-66a0a.firebaseapp.com",
  projectId: "instagram-66a0a",
  storageBucket: "instagram-66a0a.appspot.com",
  messagingSenderId: "922163485419",
  appId: "1:922163485419:web:a52bea534b20a9bfc77cae",
  measurementId: "G-WFEZGK81ZE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
