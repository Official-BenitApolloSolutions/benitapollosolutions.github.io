import { PaymentMethod, MyTimeTable, MyschoolSession, PostNotification } from  'https:/\/www.benitapollosolutions.com/sitesettings.js';
import { NumberOfNotifications } from 'https:/\/www.benitapollosolutions.com/businotifications.js';

let totalnots = document.querySelectorAll(".total-nots");

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

let arrearsum = document.getElementById("mar-sum");

let curList = document.querySelectorAll(".currency");

let paymentbtn = document.getElementById("payment-method");
 
let quartertm = document.getElementById("quarter-year");
 
let today = new Date();

//initials 
arrearsum.textContent = "280";
let _arearpay = 480 - 200;
let sesspanweek = 4;
let parthr = 2;
let sespsat = 25;
let sessat = 150;
let sessionpart = sesspanweek * parthr * sespsat;

let sessionrate = sesspanweek * sessat;

let workmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let celebrities = ["Independence Day","Christmas","Easter","Farmers Day","International Women's Day","Workers Day","Islamic calendar holidays","Hindi","other holidays"];

const moment = window.moment;

let _firstweek = "2025-04-01T01:03:00";
let _secondweek = "2025-04-08T01:03:00";
let _thirdweek = "2025-04-15T01:03:00";
let _fourthweek = "2025-04-22T01:03:00";

function getWeekofMonth(_date) {
    return moment(_date).week() - moment(_date).startOf('month').week() + 1;
}

const firstw = moment(_firstweek);
const secondw = moment(_secondweek);
const thirdw = moment(_thirdweek);
const fourthw = moment(_fourthweek);

//Period
function TotalPaymentDue(){
//locales 
    for(let k=0; k < curList.length; k++){
            curList[k].textContent = "GH¢";
            
        };
       
       //monthly period    
        for(let i=0; i < payList.length; i++){
            payList[i].textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
            console.log("Period " + payList.length);
        };
        
}

//start page 
TotalPaymentDue();

//plug-ins
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
    for(let i=0;i<totalnots.length; i++){
            totalnots[i].textContent = NumberOfNotifications();
            console.log(NumberOfNotifications())
        }
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
  let total = 0;
   let toq = _arearpay + MyschoolSession;
   if(typeof(localStorage) !== "undefined"){
       let totalpaid = localStorage.getItem("Newbalance");
        total = toq - totalpaid 
   }else{
       total = toq
   }
    
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

//session payment
function PayDay(){
      switch(getWeekofMonth(today)){
         case getWeekofMonth(firstw):
          firstweek.textContent = MyschoolSession;
           break;
         case getWeekofMonth(secondw):
          secondweek.textContent = MyschoolSession;
          break;
         case getWeekofMonth(thirdw):
          thirdweek.textContent = MyschoolSession;
           break;
        case getWeekofMonth(fourthw):
           fourthweek.textContent = MyschoolSession;
          break;
          default:
           console.log(getWeekofMonth(firstw));
           console.log(getWeekofMonth(secondw));
           console.log(getWeekofMonth(thirdw));
           console.log(getWeekofMonth(fourthw));
           console.log(getWeekofMonth(today));
           break;
      }
  
  //balances
    switch(new Date().getDay()){
     case 0:
           pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
       break;
    case 1:
       pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
       break;
     case 2:
     pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
       break;
     case 3:
        pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
console.log(pay_rate.textContent);
       break; 
       case 4:
        pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
       break;
       case 5:
        pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
       //Period 
        TotalPaymentDue();
       break;
       case 6:
        pay_rate.textContent = Number(firstweek.textContent) + Number(secondweek.textContent) + Number(thirdweek.textContent) +
Number(fourthweek.textContent) + _arearpay;
       //Period 
        TotalPaymentDue();
       break; 
  default:
        window.alert("Have a great day today!");
        break;
 }
}

PayDay();
        
//season

 for(let k=0; k<_dateclosednode.length; k++){
     _dateclosednode.innerHTML = datetempc
 }
 
        _schoolday.innerHTML = today.toLocaleString();
        
        let curmonth = today.getMonth() + 1;
        
        for(let i=0; i < nodeList.length; i++){
            nodeList[i].innerHTML = curmonth + " " + today.getYear();
        }
        
        for(let n=0; n < _jobnode.length; n++){
        _jobnode[n].innerHTML = today.getFullYear();
        }
        
        for(let i=0; i < _archivenode.length; i++){
            _archivenode.innerHTML = today.toGMTString();
        }
        
        quartertm.innerHTML =  today.toGMTString();
        
        payment_date.innerHTML = today.toLocaleString();
