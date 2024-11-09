// 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDHlLtmpjUpuYPin_ImykQa-6r-_nBpQ",
  authDomain: "simple-firebase-65cb8.firebaseapp.com",
  projectId: "simple-firebase-65cb8",
  storageBucket: "simple-firebase-65cb8.firebasestorage.app",
  messagingSenderId: "697226630923",
  appId: "1:697226630923:web:5f749fdbf6337d40a7f40e",
  measurementId: "G-32MQB1PW1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default app;
const auth = getAuth(app);
export default  auth;