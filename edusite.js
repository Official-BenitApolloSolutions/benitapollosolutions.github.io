import { paymentmethod, MyTimeTable } from  'https:/\/www.benitapollosolutions.com/sitesettings.js';

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
        for(let i=0; i < payList.length; i++){
            payList[i].innerHTML = pay_rate.innerHTML;
        }