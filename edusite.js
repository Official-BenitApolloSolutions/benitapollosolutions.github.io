import { paymentmethod, MyTimeTable, schoolsession } from  'https:/\/www.benitapollosolutions.com/sitesettings.js';

let paymentbtn = document.getElementById("payment-method");

let timetable = document.getElementById("timetable");

function pay(){
    paymentmethod();
}

function Showtimetable(){
    MyTimeTable();
}

if(paymentbtn.addEventListener){
    paymentbtn.addEventListener("click", pay, false);
}

if(timetable.addEventListener){
    timetable.addEventListener("click", Showtimetable, false);
}

let payList = document.querySelectorAll(".pay-rate");
let pay_rate = document.getElementById("payrate");

//session charges
let firstweek = document.getElementById("first-week");
let secondweek = document.getElementById("second-week");
let thirdweek = document.getElementById("third-week");
let fourthweek = document.getElementById("fourth-week");

let febsum = document.getElementById("febsum");
febsum.innerHTML = 380;

let pay = 0;

function PayRate(){
 switch(new Date().getWeek()){
     case 0:
       firstweek.innerHTML = schoolsession;
       pay = Number(firstweek.innerHTML);
       break;
       case 1:
        secondweek.innerHTML = schoolsession;
        pay = Number(secondweek.innerHTML);
         break;
       case 2:
        thirdweek.innerHTML = schoolsession;
        pay = Number(thirdweek.innerHTML);
         break;
       case 3:
        fourthweek.innerHTML = schoolsession;
         pay = Number(fourthweek.innerHTML);
         break;
       default:
         console.log("Bas for business");
         /*firstweek.innerHTML = 0;
         secondweek.innerHTML = 0;
         thirdweek.innerHTML = 0;
         fourthweek.innerHTML = 0;*/
         break;
 }

/*let totalpay = Number(febsum) + Number(firstweek) + Number(secondweek) + Number(thirdweek) */

return pay;
}

function PayDay(){
//session payment
let totalpay = PayRate();

        for(let i=0; i < payList.length; i++){
            payList[i].innerHTML = "GHS" + totalpay;
            
        };
      
    switch(new Date().getDay()){
    case 0:
           pay_rate.innerHtml = PayRate;
       break;
    case 1:
       pay_rate.innerHtml = PayRate;
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
       case 7:
        pay_rate.innerHtml = PayRate;
       break;
  default:
        window.alert("Have a great day today!");
        break;
 }
}

eval(PayDay());
        

//season
let _myYear = new Date();
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
        let arearperiod = document.querySelector("#arearsperiod");
        arearperiod.innerHTML = _myYear.toGMTString();
        
        let quartertm = document.getElementById("quarter-year");
        let quarterdate = new Date();
        quartertm.innerHTML =  quarterdate.toGMTString();
        let payment_date = document.getElementById("payment-date");
        payment_date.innerHTML = quarterdate.toLocaleString();
        
