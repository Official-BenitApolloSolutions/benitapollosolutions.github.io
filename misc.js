/*let biztimer = document.querySelector("#businessday");
let user = document.querySelector("#user");
let newday = new Date();
window.addEventListener("load", (e) => {
    e.preventDefault();
    
    biztimer.innerHTML = newday.toDateString();
user.innerHTML = navigator.UserAgent();
});
*/

function LoadLesson(){
    let loadLesson = document.getElementById("loadLesson");
if(loadLesson.addEventListener){
    loadlesson.addEventListener("click", MyFunction, false);
  }
}

function MyFunction(){
    document.WriteLine("loading lesson. please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/lessonnotes1.html");
    console.log("i got executed!");
}