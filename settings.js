"use strict";
const RegisterNow = function(){
    document.writeln("loading please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/register.html");
}

function RegisterUser(){
    let _fullname = document.getElementById("fullname");
let _email = document.getElementById("email");
let _password = document.getElementById("password");
if(typeof(Storage) !== "undefined"){
  localStorage.setItem("fullname", _fullname);
  let username = localStorage.getKey("fullname");
  alert(username);
}
}

