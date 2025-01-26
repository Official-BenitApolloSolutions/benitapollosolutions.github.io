import { GetHome } from 'https:/\/www.benitapollosolutions.com/index.js';

let loadHome = document.getElementById("learnmore");

window.onload = function(){
    if(loadHome.addEventListener){
        loadHome.addEventListener("click", GetHome, false);
    }
}

