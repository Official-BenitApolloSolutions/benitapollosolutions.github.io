'use strict'

let currentUrl = window.location.href;

window.onload = history.replaceState({}, '', currentUrl);

if(window.document.referrer !== "https:/\/www.benitapollosolutions.com/project-submission.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
}else if(window.document.referrer !== "https:/\/www.benitapollosolutions.com/educationsolution.html"){
    document.writeln("Access Denied.");
    document.writeln("Not Allowed");
}    
else{
    console.log("secure access");
}

const verifiedUser = function (){
   // let userstatus = document.querySelector("#userstatus");
   const htmlBody = document.querySelector("body");
    let userstatus = document.createElement("div");
    let comport = document.createElement("a");
    htmlBody.appendChild(userstatus);
    userstatus.classList.add("alert");
    userstatus.classList.add("alert-success");
    userstatus.innerText = "You have successfully sent a quote";
    userstatus.appendChild(comport);
    comport.setAttribute("href","https:/\/bit.ly/basonlinegh")>
    comport.classList.add("alert-link");
    comport.innerText = "View Respondent ";
    console.log("hello world")
}

const vUser = setTimeout(verifiedUser(),3000);

window.onload = eval(vUser);
