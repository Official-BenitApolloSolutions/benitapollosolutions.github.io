/* Technical support */

  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child, push, update, remove, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
   
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
  const statusonlinebtn = document.getElementById("statusonlinebtn");
  const statusofflinebtn = document.getElementById("statusofflinebtn");
  const updatebtn = document.getElementById("updatebtn");
  const deletebtn = document.getElementById("deletebtn");
  
  /* admin user */
   const username = "ADMIN";
   let supportstatusnode = document.querySelectorAll(".support-status");
   const id = push(child(ref(db), 'messages')).key;
  submitmessage.addEventListener('click', function(e){
      e.preventDefault(); 
      
      set(ref(db, 'messages/' + id),{
          username: username,
          message: document.getElementById("message").value
      })
      .then(()=>{
          document.getElementById("message").value = "";
      alert("message sent successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
      
  });
  
  /* update technical support status */  statusonlinebtn.addEventListener('click', function(e){
      e.preventDefault(); 
      
      set(ref(db, 'technicalstatus/' + id),{
          sopstatus: "Online"
      })
      .then(()=>{
      alert("status updated successfully! 🔥");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
      
  });
  
  statusofflinebtn.addEventListener('click', function(e){
      e.preventDefault(); 
      
      update(ref(db, 'technicalstatus/' + id),{
          sopstatus: "Offline"
      })
      .then(()=>{
      alert("status updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
      
  });
  
  /* update data */
  updatebtn.addEventListener('click', function(e){
      e.preventDefault();   
      
      update(ref(db, 'messages/' + id),{
          username: username,
          message: document.getElementById("message").value
      })
      .then(()=>{
          document.getElementById("message").value = "";
      alert("message updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
      
  });
  
  /* delete data */
  deletebtn.addEventListener('click', function(e){
      e.preventDefault();
      
      remove(ref(db, 'messages/' + id))
   .then(()=>{
          document.getElementById("message").value = "";
      alert("message deleted successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
      
  });
  
  /* retrieved data */
  const newMsg = ref(db, 'messages/');
  onChildAdded(newMsg, (data) =>{
  if(data.val().sopstatus !== "Offline"){
  for(x=0;x<supportstatusnode.length;x++){
      supportstatusnode[x].textContent = "Online";
  }
      }else{
         for(x=0;x<supportstatusnode.length;x++){
             supportstatusnode[x].textContent = "Offline";
         }
      }
      
      /* retrieval section */
      if(data.val().username === "ADMIN"){
      let divData = "<span class='badge bg-success p-2 mb-2'>" + data.val().message + "</span><br>";
      let com1 = document.getElementById("com");
      com1.insertAdjacentHTML('beforebegin',divData);
      console.log("com: " + username);
      }else{
          let divData = "<span class='badge bg-primary p-2 mb-2'>" + data.val().message + "</span><br>";
          let dm1 = document.getElementById("you");
          dm1.insertAdjacentHTML('beforebegin',divData);
          console.log("user: " + username);
      }
  });
  
  
  