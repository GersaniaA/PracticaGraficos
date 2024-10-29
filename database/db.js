// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de importar esto si usas Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVYHap1i7y6fu5mcKVieRMMPE5VF6ijwc",
  authDomain: "graficos-1e425.firebaseapp.com",
  projectId: "graficos-1e425",
  storageBucket: "graficos-1e425.appspot.com",
  messagingSenderId: "285850627282",
  appId: "1:285850627282:web:19c443457db41fa6c5d10b",
  measurementId: "G-5MWEZTYJN8" // Esto es opcional, no afecta si no usas Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
