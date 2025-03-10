function NumberOfNotifications(){
let totNotstoday;
let postfeed = document.querySelectorAll(".noti-updates");
    
    if(localStorage != "undefined"){
        localStorage.setItem("total-notis", postfeed.length);
        totNotstoday = localStorage.getItem("total-notis");
    }  
     return totNotstoday;
}

export { NumberOfNotifications }