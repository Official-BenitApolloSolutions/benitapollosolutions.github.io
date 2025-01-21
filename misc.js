const biztimer = document.querySelector("#businessday");
const user = document.querySelector("#user");
let newday = new Date();
biztimer.inneHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
