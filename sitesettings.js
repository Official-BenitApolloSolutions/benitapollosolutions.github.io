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

const schoolsession = SchoolSession();

function SchoolSession(){
    let _schoolsession = "School is in sesdion";
    let count = 0;
    let cashdate = new Date();
    let a = 0;
     cashdate.getDate();
    while (count !== cashdate){
        
        let payhour = a + 150;
        return payhour;
        count++;
    }
    
    //let payhour = a + 150;
    return payhour;
}

export { paymentmethod, MyTimeTable, schoolsession };

