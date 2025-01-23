  "use strict";
   (function() {  
             emailjs.init({ 
             publicKey: "UZxRIO87B2gXO7tyZ", }); 
             })();
             
          window.onload = function() {
          
          let solutionform = document.getElementById("solution-form");
              
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