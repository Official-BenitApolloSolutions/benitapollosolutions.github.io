  "use strict";
   (function() {  
             emailjs.init({ 
             publicKey: "UZxRIO87B2gXO7tyZ", }); 
             })();
             
          window.onload = function() {
          
          let studyform = document.getElementById('study-form');
          
    if(studyform.addEventListener){
        // start of control
        
         studyform.addEventListener('submit', function(event) {
                event.preventDefault();
                // date
                emailjs.sendForm('service_je7v6yn', 'Study_hjzp2fe', this)
                    .then(() => {
                        console.log('SUCCESS!');
document.writeln("successfully sent a quote. Check your email for confirmation.");
window.location.assign("https:/\/www.benitapollosolutions.com/success.html");
            location.reload();        
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        
        //end of control
        
    }
        } 


//different function
                       /*if(location.href="https:/\/www. benitapollosolutiolns.com/educationstudy.html"){
                            window.location.assign("https:/\/www.benitapollosolutions.com/studysuccess.html");
                        } 
                        else if(location.href="https:/\/www.benitapollosolutions.com/educationsolution.html"){
                            window.location.assign("https:/\/www.benitapollosolutions.com/gettingstarted.html")
                        }*/
                    
        
