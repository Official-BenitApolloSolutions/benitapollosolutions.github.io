import { paymentmethod } from  'https:/\/www.benitapollosolutions.com/sitesetting.js';

let paymentbtn = document.getElementById("payment-method");

function pay(){
    paymentmethod();
}

if(paymentbtn.addEventListener){
    paymentbtn.addEventListener("click", pay, false)
}