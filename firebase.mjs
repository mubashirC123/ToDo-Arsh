// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx9PyabC6uZJ3odZv3f9dUV3dgUMSR_w0",
  authDomain: "test-51ff0.firebaseapp.com",
  projectId: "test-51ff0",
  storageBucket: "test-51ff0.appspot.com",
  messagingSenderId: "94551822328",
  appId: "1:94551822328:web:62662f8ab4ce74fd14900d",
  measurementId: "G-TGHYB90BFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);