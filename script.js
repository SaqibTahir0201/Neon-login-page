// $ FIREBASE CDN
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHEoxkL9OfW82b0cBq97hInAakx_0PoKo",
  authDomain: "neon-login-form.firebaseapp.com",
  projectId: "neon-login-form",
  storageBucket: "neon-login-form.appspot.com",
  messagingSenderId: "264838186088",
  appId: "1:264838186088:web:724658b99d03fb4835a7dd",
  measurementId: "G-PTV3BNMV94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.querySelector("#signup_email");
const signup_password = document.querySelector("#signup_password");
const signup_btn = document.querySelector("#signup_btn");

const signing_email = document.querySelector("#signing_email");
const signing_password = document.querySelector("#signing_password");
const signing_btn = document.querySelector("#signing_btn");

let createACC = document.querySelector(".create-account");
let signInACC = document.querySelector(".signing-account");

signup_btn.addEventListener("click", createUserAccount);
signing_btn.addEventListener("click", signIn);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is login");
    createACC.style.opacity = 0;
    signInACC.style.opacity = 1;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    console.log("user is not login");
    signInACC.style.opacity = 0;
    createACC.style.opacity = 1;
    // User is signed out
    // ...
  }
});

function createUserAccount() {
  //  console.log(signup_email.value);
  const auth = getAuth();
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}

function signIn() {
  console.log(signing_email.value);
  console.log(signing_password.value);
}
