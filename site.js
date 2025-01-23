   (function() {  
             emailjs.init({ 
             publicKey: "UZxRIO87B2gXO7tyZ", }); 
             })();
             
          window.onload = function() {
           document.getElementById('study-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_xga0ihl', 'template_66nw7jk', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.write("information sent");
                        /*if(location.href="https:/\/www. benitapollosolutiolns.com/educationstudy.html"){
                            window.location.assign("https:/\/www.benitapollosolutions.com/studysuccess.html");
                        } 
                        else if(location.href="https:/\/www.benitapollosolutions.com/educationsolution.html"){
                            window.location.assign("https:/\/www.benitapollosolutions.com/gettingstarted.html")
                        }*/
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
                    
            },true);     
        }
        
        
