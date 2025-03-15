'use strict'

function Logoff(){
const currentUrl = window.location.href;
console.log(window.location.href);
document.writeln("logging off");
  
  history.replaceState({}, '', currentUrl);
  
   window.location.replace("https:/\/www.benitapollosolutions.com/institutelogin.html");
    //window.location.assign("institutelogin.html")
}