 'use strict';
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDRgs9CNgehCvqMLL4o_m-Kpa5ycMPUpt8",
    authDomain: "bascusoauth.firebaseapp.com",
    projectId: "bascusoauth",
    storageBucket: "bascusoauth.firebasestorage.app",
    messagingSenderId: "522121797709",
    appId: "1:522121797709:web:44c9f30de9b2828381bc04",
    measurementId: "G-QGBK3X61JD"
  };

  // Initialize Firebase
  
const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

const signinEmail = document.getElementById('signin-email');

signinEmail.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider);
    
    getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    alert(user.displayName);
    window.open("https:/\/www.benitapollosolutions.com/home.html","Benit Apollo Solutions",true);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage);
    // ...
  });
    
});