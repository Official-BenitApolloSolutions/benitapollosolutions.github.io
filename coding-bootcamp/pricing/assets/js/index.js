function initDeluxeSignup() {
    const deluxeSignupButton = document.getElementById('deluxe-signup');
    deluxeSignupButton.addEventListener('click', function() {
        alert('Confirm Deluxe plan signup with our trusted payment partner - Flutterwave!');
        window.location.href = 'https://flutterwave.com/pay/p2airnhpnffq'; // deluxe plan
    });
}

function initPlatinumSignup() {
    const platinumSignupButton = document.getElementById('platinum-signup');
    platinumSignupButton.addEventListener('click', function() {
        let userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/amngeyzu18ll'; // platinum plan
    });
}

function initGoldSignup() {
    const goldSignupButton = document.getElementById('gold-signup');
    goldSignupButton.addEventListener('click', function() {
        alert('Confirm Gold plan signup with our trusted payment partner - Flutterwave!');
        window.location.href = 'https://flutterwave.com/pay/a5h3aouwbevr'; // gold plan
    });
}
export { initDeluxeSignup, initPlatinumSignup, initGoldSignup };