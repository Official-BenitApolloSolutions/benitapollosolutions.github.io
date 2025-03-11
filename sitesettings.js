const PaymentMethod = function (){
 let payrate = document.getElementById("payrate").innerText;
 let pay = `Loading payment client... 
            Total Amount: GHS ${payrate}`;
    document.writeln(pay);
    window.location.assign("https:/\/wa.me/+233500518387?text=Connect%20me%20to%20the%20payment%20method.");
}

const MyTimeTable = function (){
    document.writeln("Loading timetable, please wait...");
    document.location.assign("https:/\/www.benitapollosolutions.com/lessonmodel.html");
}

let MyschoolSession = SchoolSession();

function SchoolSession(){
    let _schoolsession = "School is in sesdion";
    let count = 1;
    let payhour = 150;
    let cashdate = new Date();
    while (count != cashdate.getDay()){
        count++;
        return payhour;
    }
    
    //let payhour = a + 150;
    console.log("new week");
   // return 0;
}

function PostNotification(){
    document.writeln("Loading notifications... please wait");
    const notiurl = "https:/\/www.benitapollosolutions.com/notifications.html";
    window.open(notiurl, "_blank", "width=400,height=300");
}

export { PaymentMethod, MyTimeTable, MyschoolSession, PostNotification };

