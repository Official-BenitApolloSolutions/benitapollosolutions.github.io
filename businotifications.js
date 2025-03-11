//number of notifications 
function NumberOfNotifications(){
const postfeed = document.querySelectorAll(".noti-updates");
    
     return postfeed.length;
     console.log(postfeed.length);
}

NumberOfNotifications();

export { NumberOfNotifications }