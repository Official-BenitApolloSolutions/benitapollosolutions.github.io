'use strict';

function LoadTimer(){
    let biztimer = document.querySelector("#businessday");
  let user = document.querySelector("#user");
  let newday = new Date();
   if(window.addEventListener){
       window.addEventListener("load", TimerFunction, false);
   }
}

function TimerFunction(){
    biztimer.innerHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
}

function LoadLesson(){
    let loadLesson = document.getElementById("loadLesson");
if(loadLesson.addEventListener){
    loadlesson.addEventListener("click", MyFunction, false);
  }
}

function MyFunction(){
    document.writeln("loading lesson. please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/lessonnotes1.html");
    console.log("i got executed!");
}

/* Technical support */

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
  const submitmessage = document.getElementById("adminsubmit");
  
  /* admin user */
   const username = "ADMIN";
  submitmessage.addEventListener('click', function(e){
      e.preventDefault();   
      
      const id = push(child(ref(db), 'messages')).key;
      
      set(ref(db, 'messages/' + id),{
          username: username,
          message: document.getElementById("message").value
      }); document.getElementById("message").value = "";
      alert("message sent successfully!");
      
  });
  
  const newMsg = ref(db, 'messages/');
  onChildAdded(newMsg, (data) =>{
      if(data.val().username === "ADMIN"){
      let divData = data.val().message + "<br>";
      let com1 = document.getElementById("com");
      com1.insertAdjacentHTML('beforebegin',divData);
      console.log("com: " + username);
      }else{
          let divData = data.val().message + "<br>";
          let dm1 = document.getElementById("you");
          dm1.insertAdjacentHTML('beforebegin',divData);
          console.log("user: " + username);
      }
  });