const paymentmethod = function (){
let payrate = document.getElementById("payrate");
let pay = `Loading payment client... Total Amount: ${payrate}`;
    document.writeln(pay);
    window.location.assign("https:/\/wa.me/+233500518387?text=Connect%20me%20to%20the%20payment%20method.");
}

const MyTimeTable = function (){
    document.writeln("Loading timetable, please wait...");
    document.location.assign("https:/\/www.benitapollosolutions.com/lessonmodel.html");
}

export { paymentmethod, MyTimeTable };

