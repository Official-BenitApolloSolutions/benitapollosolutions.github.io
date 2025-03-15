'use strict'

const RegisterNow = function(){
    document.writeln("loading please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/register.html");
}

const RegisterInstitute = function(){
    document.writeln("loading please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/institution_registration.html");
}

function RegisterUser(){
    let _fullname = document.getElementById("fullname").value;
let _email = document.getElementById("email").value;
let _password = document.getElementById("password").value;
if(typeof(Storage) !== "undefined"){
  localStorage.fullname = _fullname;
  localStorage.email = _email;
  localStorage.password = _password;
  console.log(localStorage.fullname);
  alert("Successfully registered! Login to continue");
  location.reload();
 }
}

function LoginUser(){
    let email = localStorage.email;
    let password = localStorage.password;
    let _email = document.getElementById("email").value;
    let _password = document.getElementById("password").value;
    
    if(email === _email && password === _password){
        document.writeln("Logins accepted. ");
        document.writeln("Loading... please wait");
        window.location.assign("https:/\/www.benitapollosolutions.com/home.html");
    }else{
        document.writeln("wrong credentials");
        location.reload();
    }
}

function LoginInstitution(){
    let institute = localStorage.fullname;
    let email = localStorage.email;
    let password = localStorage.password;
    let _email = document.getElementById("email").value;
    let _password = document.getElementById("password").value;
    let _ins = "Catalyst"
    if(email === _email && password === _password && institute.includes(_ins)){
        document.writeln("Logins accepted. ");
        document.writeln("Loading... please wait");
        window.location.assign("https:/\/www.benitapollosolutions.com/crs.html");
    }
    else if(email === _email && password === _password){
        document.writeln("Logins accepted. ");
        document.writeln("Loading... please wait");
        window.location.assign("https:/\/www.benitapollosolutions.com/baseducation.html");
    }
    else{
        document.writeln("wrong credentials");
        location.reload();
    }
}

function ShowPassword(){
    let _pass1 = document.getElementById("password");
    let _pass2 = document.getElementById("confirm_password");
    if(_pass1.type === "password" || _pass2.type === "password" ){
        _pass1.type = "text";
        _pass2.type = "text";
    }else{
        _pass1.type = "password";
        _pass2.type = "password";
    }
}

function RememberMe(){
  let remm = document.userform.rememberme.checked;
  if(typeof(Storage) !== "undefined"){
      sessionStorage.user = navigator.UserAgent;
  }
  console.log(sessionStorage.user);
}



