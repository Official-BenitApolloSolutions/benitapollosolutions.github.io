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
               if(_budget.checked==false){
                 _rate.disabled = true;
               }
               else{
                   _rate.disabled = false;
               }
            //   function 
            _budget.checked == false;
            }
            
function jobPrice(){
    let jp = document.getElementById("jobcategory");
    let _locked = document.getElementById("locked");
    let _rate = document.getElementById("rate");
    let _dm = 3700;
    let _wd = 3000;
    
    if(jp.value === "Digital Marketing"){
        _rate.value = 'GH¢' + _dm;
        _locked.checked = true;
       console.log(_dm)
    }
    else if(jp.value === "Website Development"){
        _rate.value = 'GH¢' + _wd;
        _locked.checked == true;
        console.log(_wd)
    }else{
        _locked.checked == true;
        const _go = jp.selectedOptions[0];
        const _sd = jp.selectedOptions[1];
        const _gos = _go.value;
        const _sad = _sd.value;
        const extragovalue = _go.dataset.extraValue;
        const extrasdvalue = _sad.dataset.extraValue;
        _rate.value = _wd + _dm;
        console.log(_rate);
        console.error("something went wrong");
    }
}