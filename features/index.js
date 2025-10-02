const getStartedFunction = () => {
    const getStartedButton = document.getElementById("getStartedButton");
    getStartedButton.addEventListener("click", () => {
        const userConfirmed = confirm('You are about to be redirected to our checkout page. Do you want to proceed?');
        if (!userConfirmed) {
            return; // User cancelled the action
        }
        window.location.href = 'https://flutterwave.com/donate/zchgr8kgmfgv'; // checkout page
    });
}

export { getStartedFunction };
