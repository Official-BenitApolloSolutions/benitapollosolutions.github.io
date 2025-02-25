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
let forthweek = document.getElementById("forth-week");
let weekstatus = document.getElementById("week4-status");

function PayRate(){
firstweek.innerHTML = schoolsession;
secondweek.innerHTML = schoolsession;
thirdweek.innerHTML = schoolsession;
forthweek.innerHTML = schoolsession;

let totalpay = Number(firstweek) + Number(secondweek) + Number(thirdweek) + Number(forthweek);

return totalpay;
}

function PayDay(){
//session payment
let totalpay = Number(firstweek.innerHTML) + Number(secondweek.innerHTML) + Number(thirdweek.innerHTML) + Number(forthweek.innerHTML);

        for(let i=0; i < payList.length; i++){
            payList[i].innerHTML = "GHS" + totalpay;
            
        };
    switch(new Date().getDay()){
    case 0:
       if(weekstatus.innerHTML === "pending") {
           pay_rate.innerHtml = PayRate();
       }else{
           pay_rate.innerHTML = totalpay;
           forthweek.innerHTML = 150
       }
       break;
    case 1:
       weekstatus.innerHTML = "pending";
       if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
           console.log("pay week");
       }else{
           pay_rate.innerHTML = totalpay;
           forthweek.innerHTML = 150;           
           console.log("arrears payment");
       }
       break;
     case 2:
       if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
       }else{
           weekstatus.classList.remove("bg-secondary");
           weekstatus.classList.add("bg-warning");
           weekstatus.innerHTML = "pending";
           forthweek.innerHTML = 150;
           pay_rate.innerHTML = totalpay;
       }
       break;
     case 3:
        if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
       }else{
           forthweek.innerHTML = 150;
           pay_rate.innerHTML = totalpay;
       }
       break; 
       case 4:
        if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
       }else{
           pay_rate.innerHTML = totalpay;
       };
       break;
       case 5:
        if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
       }else{
           pay_rate.innerHTML = totalpay;
       }
       break;
       case 6:
        if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
       }else{
           pay_rate.innerHTML = totalpay;
       }
       break; 
       case 7:
        if(weekstatus.innerHTML === "unpending") {
           pay_rate.innerHtml = PayRate();
       }else{
           pay_rate.innerHTML = totalpay;
       }
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
        
