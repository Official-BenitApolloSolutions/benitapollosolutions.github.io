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
let firstweek = document.getElementById("first-week").innerHTML;
let secondweek = document.getElementById("second-week").innerHTML;
let thirdweek = document.getElementById("third-week").innerHTML;
let forthweek = document.getElementById("forth-week").innerHTML;
let weekstatus = document.getElementById("week4-status");

firstweek = schoolsession;
secondweek = schoolsession;
thirdweek = schoolsession;
forthweek = schoolsession;

let totalpay = Number(firstweek) + Number(secondweek) + Number(thirdweek) + Number(forthweek);

function PayDay(){
    switch(new Date().getDay()){
    case 0:
       if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       
       break;
    case 1:
       weekstatus.innerHTML = "pending";
       if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       break;
     case 2:
       if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       break;
     case 3:
        if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       break; 
       case 4:
        if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       };
       break;
       case 5:
        if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       break;
       case 6:
        if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       break; 
       case 7:
        if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = totalpay;
       }else{
           pay_rate.innerHTML = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);
       }
       break;
  default:
        window.alert("Have a great day today!");
        break;
 }
}

eval(PayDay());

//session payment
        for(let i=0; i < payList.length; i++){
            payList[i].innerHTML = "GHS" + pay_rate.innerHTML;
            
        }
        

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
        
