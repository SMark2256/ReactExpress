// Import the functions you need from the SDKs you need
import { initializeApp, database } from 'firebase/app'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNPU0KdhOVh-y3h5_X5k_pps_KYEhGR5Q",
  authDomain: "reactvizsga.firebaseapp.com",
  databaseURL: "https://reactvizsga-default-rtdb.europe-west1.firebasedatabase.app/foods",
  projectId: "reactvizsga",
  storageBucket: "reactvizsga.appspot.com",
  messagingSenderId: "276176096219",
  appId: "1:276176096219:web:f14652fd3d02b9d988b5fe",
  measurementId: "G-BY9YVQR0B9"
};

// Initialize Firebase
initializeApp(firebaseConfig)
// Initialize Firestore
const db = database()


export default db