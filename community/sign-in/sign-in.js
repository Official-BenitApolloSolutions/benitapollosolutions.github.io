const signInLink = document.getElementById('sign-in-button');
const userinput = document.getElementById('floatingInput');
const passwordinput = document.getElementById('floatingPassword');

sessionStorage.setItem('isLoggedIn', 'false');
let wifikey_ = Math.floor(Math.random() * 1000000);
let actkey_ = wifikey_ + 'darkweb2024';
if (!sessionStorage.getItem('wifikey')) {
    sessionStorage.setItem('wifikey', wifikey_);
}
if (!sessionStorage.getItem('username')) {
    sessionStorage.setItem('username', 'admin');
}
let wifikey = sessionStorage.getItem('wifikey');
let defaultusername = sessionStorage.getItem('username');
if (signInLink) {
    signInLink.style.cursor = 'pointer';

    signInLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert(wifikey + ' ' + defaultusername);
        if (userinput.value && passwordinput.value && userinput.value === defaultusername && passwordinput.value === wifikey + actkey_) {
            sessionStorage.setItem('isLoggedIn', 'true');  
            // window.open('./community/sign-in/index.html', '_blank');
            alert('details are correct, you are being redirected to the community page');
            // window.location.href = './community/sign-in/index.html';
        } else {
            alert('Please enter both username and password');
            alert(userinput.value + ' ' + passwordinput.value);
        }
    });
}