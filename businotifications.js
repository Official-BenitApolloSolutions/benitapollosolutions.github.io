let postfeed = document.querySelectorAll(".noti-updates");

function NumberOfNotifications(){
    
    if(localStorage != "undefined"){
        localStorage.setItem("total-notis", postfeed.length);
        const totNotstoday = localStorage.getItem("total-notis");
    }  
     return totNotstoday;
}

export { NumberOfNotifications }