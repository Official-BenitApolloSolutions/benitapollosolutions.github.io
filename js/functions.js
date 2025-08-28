import  { codingBootcamp } from "./index.js";

const _codingBootcamp = document.getElementById("coding-bootcamp");
_codingBootcamp.addEventListener('click', codingBootcamp, false);

function joinTheTeam(e) {
    e.preventDefault();
    document.writeln("<h1>Join the Team</h1>");
    window.open('./fullstack-developer-join-the-team/index.html#join-team', '_blank');
}