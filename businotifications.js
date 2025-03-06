let totalnot = document.querySelectorAll(".posts-notification");

function NumberOfNotifications(){
    
    if(localStorage != "undefined"){
        localStorage.notification = totalnot.length;
    }  
    
  
}

window.onload = NumberOfNotifications;