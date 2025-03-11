import { PaymentMethod, MyTimeTable, MyschoolSession, PostNotification } from  'https:/\/www.benitapollosolutions.com/sitesettings.js';
import { NumberOfNotifications } from 'https:/\/www.benitapollosolutions.com/businotifications.js';

let _dateclosednode = document.querySelectorAll(".dateclosed");

let nodeList = document.querySelectorAll(".myYear");

let postnotification = document.getElementById("post-notification");

let _schoolday = document.getElementById("schoolday");

let institute = document.getElementById("institution-name");

let datetempc = document.querySelector("#dateclosed").innerHTML;

let timetable = document.getElementById("timetable");

let payList = document.querySelectorAll(".pay-rate");

let pay_rate = document.getElementById("payrate");

let payment_date = document.getElementById("payment-date");
//session charges
let firstweek = document.getElementById("first-week");
let secondweek = document.getElementById("second-week");
let thirdweek = document.getElementById("third-week");
let fourthweek = document.getElementById("fourth-week");

let _archivenode = document.querySelectorAll(".arearsperiod");

let _jobnode = document.querySelectorAll(".jobYear");

let febsum = document.getElementById("feb-sum");

febsum.textContent = "380";
let _febpay = 380;

let curList = document.querySelectorAll(".currency");

let paymentbtn = document.getElementById("payment-method");
 
 let amountpaid = document.querySelectorAll(".amount-paid");
 
let quartertm = document.getElementById("quarter-year");
 
let today = new Date();

let sesspanweek = 4;
let parthr = 2;
let sespsat = 25;
let sessat = 150;
let newbalance;

let sessionpart = sesspanweek * parthr * sespsat;

let sessionrate = sesspanweek * sessat;

let workmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let celebrities = ["Independence Day","Christmas","Easter","Farmers Day","International Women's Day","Workers Day"];

const moment = require('moment');

let _firstweek = "2025-03-01T01:03:00";
let _secondweek = "2025-03-15T01:03:00";
let _thirdweek = "2025-03-22T01:03:00";
let _fourthweek = "2025-03-31T01:03:00";

function getWeekofMonth(_date) {
    return moment(_date).week() - moment(_date).startOf('month').week() + 1;
}

const firstw = moment(_firstweek);
const secondw = moment(_secondweek);
const thirdw = moment(_thirdweek);
const fourthw = moment(_fourthweek);

if(paymentbtn.addEventListener){
    paymentbtn.addEventListener("click", pay, false);
}

if(timetable.addEventListener){
    timetable.addEventListener("click", Showtimetable, false);
}

if(postnotification.addEventListener){
   postnotification.addEventListener("click", PostNotification, false);
}

function ShowNotifications(){
    institute.textContent = "Royal Secondary School";
     document.getElementById("totnots").TextContent = NumberOfNotifications();
//end of function 
}

ShowNotifications();

function pay(){
    paymentmethod();
}

function Showtimetable(){
    MyTimeTable();
}

const PayRate = function(){
 
    let total = _febpay + MyschoolSession + 150;
    
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
            curList[k].textContent = "GHS";
            
        };
        
        for(let i=0; i < payList.length; i++){
            payList[i].textContent = PayRate();
            
        };
}

TotalPaymentDue();

function PayDay(){
//session payment
      
      if(getWeekofMonth(firstw) == 1){
          firstweek.textContent = MyschoolSession;
      }
      else if(getWeekofMonth(secondw) == 2){
          secondweek.textContent = MyschoolSession;
      }
      else if(getWeekofMonth(thirdw) == 3){
          thirdweek.textContent = MyschoolSession;
      }
       else if(getWeekofMonth(fourthw) == 4){
           fourthweek.textContent = MyschoolSession;
       }
        else{
            console.log("Something went wrong");
        }
 }
 
    switch(new Date().getDay()){
    case 0:
           pay_rate.textContent = PayRate();
       break;
    case 1:
       pay_rate.textContent = PayRate();
       break;
     case 2:
     pay_rate.textContent = PayRate();
       break;
     case 3:
        pay_rate.textContent = PayRate();
       break; 
       case 4:
        pay_rate.textContent = PayRate();
       break;
       case 5:
        pay_rate.textContent = PayRate();
       break;
       case 6:
        pay_rate.textContent = PayRate();
       break; 
  default:
        window.alert("Have a great day today!");
        break;
 }
}

PayDay();
        
//season

 for(let k=0; k< _dateclosednode.length; k++){
     _dateclosednode.innerHTML = datetempc
 }
 
        _schoolday.innerHTML = today.toLocaleString();
        
        for(let i=0; i < nodeList.length; i++){
            nodeList[i].innerHTML = today.getYear();
        }
        
        for(let n=0; n < _jobnode.length; n++){
        _jobnode[n].innerHTML = today.getFullYear();
        }
        
        for(let i=0; i < _archivenode.length; i++){
            _archivenode.innerHTML = today.toGMTString();
        }
        
        quartertm.innerHTML =  today.toGMTString();
        
        payment_date.innerHTML = today.toLocaleString();
         
function DebitBalance(){
    const balance = PayRate();
    newbalance = balance - amountpaid;
    return newbalance;
}