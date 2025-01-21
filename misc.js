const biztimer = document.querySelector("#businessday");
const user = document.querySelector("#user");
let newday = new Date();
window.addEventListener("load", (e) => {
    e.preventDefault();
    
    biztimer.innerHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
});

