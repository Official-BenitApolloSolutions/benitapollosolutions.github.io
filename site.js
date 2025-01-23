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
                // these IDs from the previous steps
                emailjs.sendForm('service_xga0ihl', 'template_66nw7jk', this)
                    .then(() => {
                        console.log('SUCCESS!');
        let sucstatus = document.getElementById("suc_status");
        sucstatus.classList.remove("invisible");
        sucstatus.classList.add("visible");
        sucstatus.innerHTML = "successfully sent a quote. Check your email for confirmation.";             
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
                    
        
        
