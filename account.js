'use strict'
let user;
let currentUrl = window.location.href;

window.onload = history.replaceState({}, '', currentUrl);

if(window.document.referrer !== "https:/\/www.benitapollosolutions.com/institutelogin.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
}else{
    console.log("secure login");
}

console.log(window.location.href);

(function(){
   if(typeof(localStorage) !== "undefined"){
       
       user  = localStorage.fullname; 
   } 
   
let institute = document.getElementById("institution-name");
if(user !== null){
    
    institute.textContent = user;
}else{
    console.log(user);
    console.error("something went wrong");
}
})();
