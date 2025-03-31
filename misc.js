'use strict';

function LoadTimer(){
    let biztimer = document.querySelector("#businessday");
  let user = document.querySelector("#user");
  let newday = new Date();
   if(window.addEventListener){
       window.addEventListener("load", TimerFunction, false);
   }
}

function TimerFunction(){
    biztimer.innerHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
}

function LoadLesson(){
    let loadLesson = document.getElementById("loadLesson");
if(loadLesson.addEventListener){
    loadlesson.addEventListener("click", MyFunction, false);
  }
}

function MyFunction(){
    document.writeln("loading lesson. please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/lessonnotes1.html");
    console.log("i got executed!");
}
  