import { paymentmethod, MyTimeTable, schoolsession, PostNotification } from  'https:/\/www.benitapollosolutions.com/sitesettings.js';

let paymentbtn = document.getElementById("payment-method");

let timetable = document.getElementById("timetable");

let postnotification = document.getElementById("post-notification");

let totnots = document.getElementById("totnots");

function ShowNotifications(){

    if(localStorage != "undefined"){
        totnots.innerText = localStorage.notification;
    }
     if(postnotification.addEventListener){
   postnotification.addEventListener("click", PostNotification, false);
}

if(paymentbtn.addEventListener){
    paymentbtn.addEventListener("click", pay, false);
}

 if(timetable.addEventListener){
    timetable.addEventListener("click", Showtimetable, false);
}
//end of function 
}

function pay(){
    paymentmethod();
}

function Showtimetable(){
    MyTimeTable();
}

let payList = document.querySelectorAll(".pay-rate");
let pay_rate = document.getElementById("payrate");

//session charges
let firstweek = document.getElementById("first-week");
let secondweek = document.getElementById("second-week");
let thirdweek = document.getElementById("third-week");
let fourthweek = document.getElementById("fourth-week");
let currency = "GHS "
let febsum = document.getElementById("Feb-sum");
eval("febsum.innerHTML = currency + 380");

let today = new Date();

const PayRate = function(){
 switch(today.getMonth() + 1){
     case 2:
       return schoolsession;
       break;
       case 3:
        return schoolsession
         break;
       case 4:
        return schoolsession
         break;
       case 5:
        return schoolsession
         break;
       default:
         console.log("Bas for business");
         break;
 }

}

function PayDay(){
//session payment

        for(let i=0; i < payList.length; i++){
            payList[i].innerHTML = "GHS" + 0;
            
        };
      
    switch(new Date().getDay()){
    case 0:
           pay_rate.innerHtml = currency + PayRate;
       break;
    case 1:
       pay_rate.innerHtml = currency + " " + PayRate;
       break;
     case 2:
     pay_rate.innerHtml = PayRate;
       break;
     case 3:
        pay_rate.innerHtml = PayRate;
       break; 
       case 4:
        pay_rate.innerHtml = PayRate;
       break;
       case 5:
        pay_rate.innerHtml = PayRate;
       break;
       case 6:
        pay_rate.innerHtml = PayRate;
       break; 
  default:
        window.alert("Have a great day today!");
        break;
 }
}

eval("PayDay()");
        
//season
let _myYear = new Date();
let datetempc = document.querySelector("#dateclosed").innerHTML;
let _dateclosednode = document.querySelectorAll(".dateclosed");
 for(let k=0; k< _dateclosednode.length; k++){
     _dateclosednode.innerHTML = datetempc
 }
        let _schoolday = document.getElementById("schoolday");
        _schoolday.innerHTML = _myYear.toLocaleString();
        
        let nodeList = document.querySelectorAll(".myYear");
        for(let i=0; i < nodeList.length; i++){
            nodeList[i].innerHTML = _myYear.getYear();
        }
        
        let _jobnode = document.querySelectorAll(".jobYear");
        for(let n=0; n < _jobnode.length; n++){
        _jobnode[n].innerHTML = _myYear.getFullYear();
        }
        
        let _archivenode = document.querySelectorAll(".arearsperiod");
        for(let i=0; i < _archivenode.length; i++){
            _archivenode.innerHTML = _myYear.toGMTString();
        }
        
        
        let quartertm = document.getElementById("quarter-year");
        let quarterdate = new Date();
        quartertm.innerHTML =  quarterdate.toGMTString();
        let payment_date = document.getElementById("payment-date");
        payment_date.innerHTML = quarterdate.toLocaleString();
        
window.onload = ShowNotifications;