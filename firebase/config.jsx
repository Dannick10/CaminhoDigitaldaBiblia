
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB7xUJK0_d57BYhoyZkjzsKZYtNadI8aiA",
  authDomain: "caminhodigitaldabiblia.firebaseapp.com",
  projectId: "caminhodigitaldabiblia",
  storageBucket: "caminhodigitaldabiblia.appspot.com",
  messagingSenderId: "74860757014",
  appId: "1:74860757014:web:7de1e7b0edd16f476b3537"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}