const GetHome = function (){ 
//window.location.assign("https:/\/www.benitapollosolutions.com/home.html");

 console.log("200");
  setTimeOut(() => { 
  let usrld =   document.getElementById("loadstatus");
  usrld.classList.remove("spinner-border");
  usrld.classList.add("invisible");   console.log(location.protocol); 
      }, 1300);
      
}

export { GetHome };
