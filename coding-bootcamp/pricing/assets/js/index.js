const initDeluxeSignup = () => {
    const deluxeSignupButton = document.getElementById('deluxe-signup');
    deluxeSignupButton.addEventListener('click', function() {
        const userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/auq6xwf5c847'; // deluxe plan
        window.open(window.location.href, '_blank'); // open in new tab
    });
}

const initPlatinumSignup = () => {
    const platinumSignupButton = document.getElementById('platinum-signup');
    platinumSignupButton.addEventListener('click', function() {
        const userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/cva7cloerwo5'; // platinum plan
        window.open(window.location.href, '_blank'); // open in new tab
    });
}

const initGoldSignup = () => {
    const goldSignupButton = document.getElementById('gold-signup');
    goldSignupButton.addEventListener('click', function() {
        const userConfirmed = confirm('You are about to be redirected to our trusted payment partner - Flutterwave. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/pay/t9dcyrft6byh'; // gold plan
        window.open(window.location.href, '_blank'); // open in new tab
    });
}
export { initDeluxeSignup, initPlatinumSignup, initGoldSignup };