// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD8wGW-l5vwCGy7KQtkQATjFLg4V9k7Dg",
  authDomain: "inventory-management-app-12db7.firebaseapp.com",
  projectId: "inventory-management-app-12db7",
  storageBucket: "inventory-management-app-12db7.appspot.com",
  messagingSenderId: "1069683747562",
  appId: "1:1069683747562:web:8081e829f9e11c88760593",
  measurementId: "G-M9TV8Q1T2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
