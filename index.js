const getHome = function (){ 
//window.location.assign("https:/\/www.benitapollosolutions.com/home.html");

    let usrld =   document.getElementById("loadstatus");

 console.log("200");
  setTimeOut(() => { 
  usrld.classList.add("invisible");   console.log(location.protocol); 
      }, 3000);
}

export { getHome };
