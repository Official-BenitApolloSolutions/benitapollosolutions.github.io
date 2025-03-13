function MakePayment(){
//start of function 
//let balance = _febpay + MyschoolSession + 150; 
let amountpaid = document.getElementById("amount-paid").value;
   // let newbalance = balance - Number(amountpaid);
    if(typeof(localStorage) !== "undefined"){
        localStorage.setItem("Newbalance", amountpaid);
    }
    console.log("successfully paid amount of " + amountpaid);
    location.reload();
   //end of function 
}