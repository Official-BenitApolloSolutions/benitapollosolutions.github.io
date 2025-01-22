const biztimer = document.querySelector("#businessday");
const user = document.querySelector("#user");
const loadlesson = document.querySelector("#loadlesson");
let newday = new Date();
window.addEventListener("load", (e) => {
    e.preventDefault();
    
    biztimer.innerHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
});

loadlesson.addEventListener("click", (e) => {
         e.preventDefault();
         
    document.WriteLine("loading lesson. please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/lessonnotes1.html");
});