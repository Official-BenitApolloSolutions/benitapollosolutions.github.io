//prevent abuse
'use strict';

 (function() {  
             emailjs.init({ 
             publicKey: "D1y25vk5Im7SPLYnC", }); 
             })();
             
          window.onload = function() {
          
          let formproject = document.getElementById('form-project');
          
    if(formproject.addEventListener){
        // start of control
        
         formproject.addEventListener('submit', function(event) {
                event.preventDefault();
                // date
                emailjs.sendForm('service_qdmoeeb', 'template_vka0rx7', this)
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
 
 function Budget(){
               let _budget = document.getElementById("locked");
               let _rate = document.getElementById("rate");
              _budget.checked = false; if(_budget.checked===true){
               _budget.checked = false;
                 _rate.disabled = true;
               }
               else{
                   _rate.disabled = false;
                   _rate.value = "Gh¢10000";
               }
            
            }
            
function jobPrice(){
    let jp = document.getElementById("jobcategory");
    let _locked = document.getElementById("locked");
    let rate = document.getElementById("rate");
    
    let _dm = 3700;
    let _wd = 3000;
    let _sof = 7000;
    
    if(jp.value === "Digital Marketing"){
        rate.value = 'GH¢' + _dm;
        _locked.checked = true;
        rate.disabled = true;
       console.log(_dm)
    }
    else if(jp.value === "Website Development"){
        rate.value = 'GH¢' + _wd;
        _locked.checked = true;
        rate.disabled = true;
        console.log(_wd);
    }
    else if(jp.value === "Software Development"){
        rate.value = 'GH¢' + _sof;
        _locked.checked = true;
        rate.disabled = true;
        console.log(_sof);
    }
    else{
        _locked.checked = false;
        rate.disabled = false;
        console.log(rate);
        console.error("something went wrong");
    }
}