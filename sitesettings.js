const paymentmethod = function (){
 let payrate = document.getElementById("payrate").innerHTML;
 let pay = `Loading payment client... 
            Total Amount: GHS ${payrate}`;
    document.writeln(pay);
    window.location.assign("https:/\/wa.me/+233500518387?text=Connect%20me%20to%20the%20payment%20method.");
}

const MyTimeTable = function (){
    document.writeln("Loading timetable, please wait...");
    document.location.assign("https:/\/www.benitapollosolutions.com/lessonmodel.html");
}

let schoolsession = SchoolSession();

function SchoolSession(){
    let _schoolsession = "School is in sesdion";
    let count = 1;
    let payhour = 0;
    let cashdate = new Date();
    while (count == cashdate.getDay()){
        payhour = 150;
    }
    
    //let payhour = a + 150;
    return payhour;
}

export { paymentmethod, MyTimeTable, schoolsession };

