   (function() {  
             emailjs.init({ 
             publicKey: "UZxRIO87B2gXO7tyZ", }); 
             })();
             
          window.onload = function() {
          
          let studyform = document.getElementById('study-form');
          let solutionform = document.getElementById("solution-form");
          
    if(studyform.addEventListener){
        // start of control
        
         studyform.addEventListener('submit', function(event) {
                event.preventDefault();
                // date
                emailjs.sendForm('service_xga0ihl', 'template_66nw7jk', this)
                    .then(() => {
                        console.log('SUCCESS!');
document.writeln("successfully sent a quote. Check your email for confirmation.");
            location.reload();        
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        
        //end of control
    }
    
    if(solutionform.addEventListener){
        // start of control
        
         solutionform.addEventListener('submit', function(event) {
                event.preventDefault();
                // date
                emailjs.sendForm('service_xga0ihl', 'template_66nw7jk', this)
                    .then(() => {
                        console.log('SUCCESS!');
document.writeln("successfully sent a quote. Check your email for confirmation.");
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
                    
        
        
