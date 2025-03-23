'use strict';

let user = '';

if(window.document.referrer !== "https:/\/www.benitapollosolutions.com/institutelogin.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
}
if(window.document.referrer !== "https:/\/www.benitapollosolutions.com/account_profile.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
}
else{
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
