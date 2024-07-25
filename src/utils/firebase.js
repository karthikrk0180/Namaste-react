// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKtkgCs4gE9ianmi3yF8qgOgWjzqb74KA",
  authDomain: "swiggy-it.firebaseapp.com",
  projectId: "swiggy-it",
  storageBucket: "swiggy-it.appspot.com",
  messagingSenderId: "842249151879",
  appId: "1:842249151879:web:c4bb5d01de3875b6185f22",
  measurementId: "G-MCP45ZC03B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);