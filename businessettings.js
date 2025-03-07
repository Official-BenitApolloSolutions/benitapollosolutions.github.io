import { PaymentMethod, MyTimeTable, MyschoolSession, PostNotification } from  'https:/\/www.benitapollosolutions.com/sitesettings.js';
import { NumberOfNotifications } from 'https:/\/www.benitapollosolutions.com/businotifications.js';

let institute = document.getElementById("institution-name");

let sesspanweek = 4;
let parthr = 2;
let sespsat = 25;
let sessat = 150;
let sessionpart = sesspanweek * parthr * sespsat;
let sessionrate = sesspanweek * sessat;

let paymentbtn = document.getElementById("payment-method");

if(paymentbtn.addEventListener){
    paymentbtn.addEventListener("click", pay, false);
}

let timetable = document.getElementById("timetable");

if(timetable.addEventListener){
    timetable.addEventListener("click", Showtimetable, false);
}

let postnotification = document.getElementById("post-notification");

if(postnotification.addEventListener){
   postnotification.addEventListener("click", PostNotification, false);
}

function ShowNotifications(){
    institute.innerText = "Royal Secondary School";
     document.getElementById("totnots").innerText = NumberOfNotifications();
//end of function 
}

ShowNotifications();

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

let febsum = document.getElementById("feb-sum");

febsum.innerText = "380";
let _febpay = 380;

let curList = document.querySelectorAll(".currency");
 
let today = new Date();

const PayRate = function(){
 
    let total = _febpay + schoolsession;
    
 switch(today.getMonth() + 1){
     case 2:
       return total;
       break;
       case 3:
        return total;
         break;
       case 4:
        return total;
         break;
       case 5:
        return total;
         break;
       default:
         console.log("Bas for business");
         break;
 }

}

function TotalPaymentDue(){
    for(let k=0; k < curList.length; k++){
            curList[k].innerText = "GHS";
            
        };
        
        for(let i=0; i < payList.length; i++){
            payList[i].innerText = PayRate();
            
        };
}

TotalPaymentDue();

function PayDay(){
//session payment
      
      switch(today.getMonth() + 1){
     case 2:
       console.log(today.getMonth() + 1);
       break;
       case 3:
        firstweek.innerText = MyschoolSession;
         break;
       case 4:
        secondweek.innerText = MyschoolSession;
         break;
       case 5:
        thirdweek.innerText = MyschoolSession;
         break;
         case 6:
         fourthweek.innerText = MyschoolSession;
       default:
         console.log("Bas for business");
         break;
 }
 
    switch(new Date().getDay()){
    case 0:
           pay_rate.innerText = PayRate();
       break;
    case 1:
       pay_rate.innerText = PayRate();
       break;
     case 2:
     pay_rate.innerText = PayRate();
       break;
     case 3:
        pay_rate.innerText = PayRate();
       break; 
       case 4:
        pay_rate.innerText = PayRate();
       break;
       case 5:
        pay_rate.innerText = PayRate();
       break;
       case 6:
        pay_rate.innerText = PayRate();
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