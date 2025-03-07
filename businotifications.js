let postfeed = document.querySelectorAll(".notiupdates");
function NumberOfNotifications(){
    
    if(localStorage != "undefined"){
        localStorage.notification = postfeed.length;
    }  
    
  
}

window.onload = NumberOfNotifications;