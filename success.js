const verifiedUser = function (){
   // let userstatus = document.querySelector("#userstatus");
   const htmlBody = document.querySelector("body");
    let userstatus = document.createElement("div");
    let comport = document.createElement("a");
    htmlBody.appendChild(userstatus);
    userstatus.classList.add("alert");
    userstatus.classList.add("alert-success");
    userstatus.innerText = "You have successfully sent a quote";
    userstatus.appendChild(comport);
    comport.setAttribute("href","https:/\/bit.ly/basonlinegh")>
    comport.classList.add("alert-link");
    comport.innerText = "View Respondent ";
    console.log("hello world")
}

const vUser = setTimeout(verifiedUser(),3000);

window.onload = eval(vUser);
