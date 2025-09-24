const initDeluxeSignup = () => {
    const deluxeSignupButton = document.getElementById('deluxe-signup');
    deluxeSignupButton.addEventListener('click', function() {
        const userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/p2airnhpnffq'; // deluxe plan
    });
}

const initPlatinumSignup = () => {
    const platinumSignupButton = document.getElementById('platinum-signup');
    platinumSignupButton.addEventListener('click', function() {
        const userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/amngeyzu18ll'; // platinum plan
    });
}

const initGoldSignup = () => {
    const goldSignupButton = document.getElementById('gold-signup');
    goldSignupButton.addEventListener('click', function() {
        const userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/a5h3aouwbevr'; // gold plan
    });
}
export { initDeluxeSignup, initPlatinumSignup, initGoldSignup };