let postfeed = document.getElementById("feedupdates");
function NumberOfNotifications(){
    
    if(localStorage != "undefined"){
        localStorage.notification = postfeed.innerText;
    }  
    
  
}

window.onload = NumberOfNotifications;