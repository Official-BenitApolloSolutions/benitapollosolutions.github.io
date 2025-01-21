const biztimer = document.querySelector("#businessday");
const user = document.querySelector("#user");
let newday = new Date();
biztimer.innerHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
