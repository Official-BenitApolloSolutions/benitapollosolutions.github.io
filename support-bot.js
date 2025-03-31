 import { db } from 'https:/\/www.benitapollosolutions.com/tech-support.js';
 
 function relieveData(){
 let newMsg = ref(db, 'messages/');
  newMsg.remove(); document.getElementById("com").value = "";
 document.getElementById("you").value = ""
 console.log("hello workd");
  }