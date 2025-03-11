//number of notifications 
function NumberOfNotifications(){
let totNotstoday;
let postfeed = document.querySelectorAll(".noti-updates");
    
    /*if(localStorage != "undefined"){
        localStorage.setItem("total-notis", postfeed.length);
        totNotstoday = localStorage.getItem("total-notis");
    }  */
     return postfeed.length;
     console.log(postfeed.length);
}

export { NumberOfNotifications }