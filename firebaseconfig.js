// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdT5SXyP3vVV4lWYjNmCRPEC3uWYoeXGw",
  authDomain: "simplefirebaseapp-fe338.firebaseapp.com",
  projectId: "simplefirebaseapp-fe338",
  storageBucket: "simplefirebaseapp-fe338.appspot.com", // Fixed this line
  messagingSenderId: "199568780671",
  appId: "1:199568780671:web:88511b79e21481d0513e4a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export the initialized app
export default firebaseApp;
