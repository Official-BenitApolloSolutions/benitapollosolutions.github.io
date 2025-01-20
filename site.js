   (function() {  
             emailjs.init({ 
             publicKey: "D1y25vk5Im7SPLYnC", }); 
             })();
             
          window.onload = function() {
           document.getElementById('solution-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_je7v6yn', 'Study_hjzp2fe', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.write("information sent");
                        if(location.href="https:/\/www. benitapollosolutiolns.com/educationstudy.html"){
                            window.location.assign("https:/\/www.benitapollosolutions.com/studysuccess.html");
                        } 
                        else if(location.href="https:/\/www.benitapollosolutions.com/educationsolution.html"){
                            window.location.assign("https:/\/www.benitapollosolutions.com/gettingstarted.html")
                        }
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
                    
            },true);     
        }
        
        
