// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb3rnDCAtO9C23Q9Qi74QGPfrrAKN20YI",
  authDomain: "coffee-store-fb08f.firebaseapp.com",
  projectId: "coffee-store-fb08f",
  storageBucket: "coffee-store-fb08f.firebasestorage.app",
  messagingSenderId: "441968234026",
  appId: "1:441968234026:web:cdd9311a46fac973ae3d53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);