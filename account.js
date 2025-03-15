'use strict'
let currentUrl = window.location.href;

window.onload = history.replaceState({}, '', currentUrl);

if(window.document.referrer !== "https:/\/www.benitapollosolutions.com/institutelogin.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
}else{
    console.log("secure login");
}

console.log(window.location.href);
 
  
let user = "Institution Profile";

(function(){
   if(typeof(localStorage) !== "undefined"){
       
      user  = localStorage.fullname; 
   } 
   
let institute= document.getElementById("institute");
if(institute !== null){
    institute.textContent = user;
}else{
    console.error("something went wrong");
}
})();
