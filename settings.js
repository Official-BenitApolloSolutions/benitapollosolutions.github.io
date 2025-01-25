const RegisterNow = function(){
    document.writeln("loading please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/register.html");
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
  alert("successfully registered!");
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
      console.log(sessionStorage.user);
  }
}