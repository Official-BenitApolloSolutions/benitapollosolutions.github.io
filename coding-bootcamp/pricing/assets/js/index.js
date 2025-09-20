function initDeluxeSignup() {
    const deluxeSignupButton = document.getElementById('deluxe-signup');
    deluxeSignupButton.addEventListener('click', function() {
        // Handle the signup logic here
        alert('Deluxe plan signup with our trusted payment partner - Flutterwave!');
    });
}

export { initDeluxeSignup };