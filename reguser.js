//'use strict';

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDRgs9CNgehCvqMLL4o_m-Kpa5ycMPUpt8",
    authDomain: "bascusoauth.firebaseapp.com",
    projectId: "bascusoauth",
    storageBucket: "bascusoauth.firebasestorage.app",
    messagingSenderId: "522121797709",
    appId: "1:522121797709:web:ffc363847accaa1281bc04",
    measurementId: "G-L1C1L0WN7T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click',function(e){
  e.preventDefault();
  
      set(ref(db, 'user/' + document.getElementById('fullname').value),
 {
          fullname: document.getElementById("fullname").value,
          insticode: document.getElementById("insticode").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value
 });
 alert("successfully completed ");
  });