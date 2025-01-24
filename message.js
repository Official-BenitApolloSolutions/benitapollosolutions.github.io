//import { GetHome } from 'https:/\/www.benitapollosolutions.com/index.js';
            


window.onload = function(){
    if(window.addEventListener){
        window.addEventListener("load", (e) => {
     e.preventDefault();
      
      let mainacc = document.getElementById("mainaccount"); 
      let usrld =   document.getElementById("loadstatus");
          
     //GetHome();
     
     setTimeOut(() => { 
          mainacc.style.display = "block";
          usrld.style.display = "none"; 
      }, 2000); 
}, false);

    }
}
