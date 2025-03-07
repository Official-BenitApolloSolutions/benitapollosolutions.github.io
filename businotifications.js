let postfeed = document.querySelectorAll(".noti-updates");
let totNotstoday;
function NumberOfNotifications(){
    
    if(localStorage != "undefined"){
        localStorage.setItem("total-notis", postfeed.length);
        totNotstoday = localStorage.getItem("total-notis");
    }  
     return totNotstoday;
}

export { NumberOfNotifications }