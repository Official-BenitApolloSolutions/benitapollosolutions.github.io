'use strict';

  
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
   
  const firebaseConfig = {
    apiKey: "AIzaSyDRgs9CNgehCvqMLL4o_m-Kpa5ycMPUpt8",
    authDomain: "bascusoauth.firebaseapp.com",
    databaseURL: "https:/\/bascusoauth-default-rtdb.firebaseio.com",
    projectId: "bascusoauth",
    storageBucket: "bascusoauth.firebasestorage.app",
    messagingSenderId: "522121797709",
    appId: "1:522121797709:web:7bc423e6d79cff3081bc04",
    measurementId: "G-NJ6LJQ4RCP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  const submitmessage = document.getElementById("submit");
  submitmessage.addEventListener('click', function(e){
      e.preventDefault();      
      let username = confirm("enter username");
      
      const id = push(child(ref(db), 'messages')).key;
      
      set(ref(db, 'messages/' + id),{
          username: username,
          message: document.getElementById("message").value
      }); document.getElementById("message").value = "";
      alert("message sent successfully!");
      
  });
  
  const newMsg = ref(db, 'messages/');
  onChildAdded(newMsg, (data) =>{
      if(data.val().name !== username){
          let divData = "<p class='text-start'>" + data.val().message + "" + "</p>";
          let dm1 = document.getElementById("bodyContent");
          dm1.insertAdjacentHTML('beforebegin',divData);
      }else{
          let divData = "<p class='text-end'>" + data.val().message + "" + "</p>";
      let dm1 = document.getElementById("bodyContent");    dm1.insertAdjacentHTML('beforebegin',divData);
      }
  });