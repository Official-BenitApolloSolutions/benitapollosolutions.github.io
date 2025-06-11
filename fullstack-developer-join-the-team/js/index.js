(()=>{
	"use strict";
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		// these IDs from the previous steps
        emailjs.sendForm('service_xga0ihl', 'template_66nw7jk', this)
            .then(() => {
                console.log('SUCCESS!');
                document.writeln('Success... Waiting for confirmation')
                location.reload();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
})();