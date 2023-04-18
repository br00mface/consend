// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3XDWJHUqe0-T3qtPoUQob1_leuL23K0o",
  authDomain: "consend-ac432.firebaseapp.com",
  projectId: "consend-ac432",
  storageBucket: "consend-ac432.appspot.com",
  messagingSenderId: "767437200143",
  appId: "1:767437200143:web:9fc330429d0171751dbc7a",
  measurementId: "G-MD2C69RDLW"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);