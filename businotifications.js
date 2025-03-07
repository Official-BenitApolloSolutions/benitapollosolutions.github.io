let postfeed = document.querySelectorAll(".noti-updates");

function NumberOfNotifications(){
    
    if(localStorage != "undefined"){
        localStorage.notification = postfeed.length;
    }  
    
  
}

window.onload = NumberOfNotifications;