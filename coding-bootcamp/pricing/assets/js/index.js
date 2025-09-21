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
        alert('Confirm Platinum plan signup with our trusted payment partner - Flutterwave!');
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