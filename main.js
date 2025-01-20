"use strict"
let counter = 1;
let count;
const changeMode = function (){
    counter++;
const htmlBody = document.querySelector('html');
    const themehelper = document.querySelector('#mainnav');
    const searchbtn = document.querySelector('#searchbtn');
 //   let visionbanner =  document.querySelector('#visionbanner');
    let settingscontrolsa = document.querySelector('#settingscontrolsa');
    let settingscontrolsb = document.querySelector("#settingscontrolsb");
    let contentfirst = document.querySelector("#content-first");
    if(typeof(Storage) !== "undefined"){
              if(counter % 2 == 0){
    htmlBody.setAttribute('data-bs-theme', 'dark');
    themehelper.classList.remove("bg-dark");
    themehelper.classList.add("bg-primary");
   /* visionbanner.classList.remove("text-bg-primary")
    visionbanner.classList.add("text-bg-dark");*/
    settingscontrolsa.classList.remove("text-bg-light"); settingscontrolsa.classList.add("text-bg-secondary");
    settingscontrolsb.classList.remove("text-bg-light"); settingscontrolsb.classList.add("text-bg-secondary");
    searchbtn.classList.remove("btn-primary");
    searchbtn.classList.add("btn-success");
   
    contentfirst.classList.remove("text-bg-light");
    contentfirst.classList.add("text-bg-secondary");
    //alert("i just changed the theme");
    }else{
        htmlBody.setAttribute('data-bs-theme', 'light');
        themehelper.classList.remove("bg-primary");
    themehelper.classList.add("bg-dark");
 /*   visionbanner.classList.remove("text-bg-secondary")
    visionbanner.classList.add("text-bg-primary"); */
    settingscontrolsa.classList.remove("text-bg-secondary");
    settingscontrolsa.classList.add("text-bg-light");
    settingscontrolsb.classList.remove("text-bg-secondary");
    settingscontrolsb.classList.add("text-bg-light");
    searchbtn.classList.remove("btn-success");
    searchbtn.classList.add("btn-primary");
    
    contentfirst.classList.remove("text-bg-secondary");
    contentfirst.classList.add("text-bg-light");
      //  alert("i changed to light")
          }
        }
    }
    
    const getHardware = function (){
        document.write("loading please wait...");
        
        window.location.assign("https:/\/www.benitapollosolutions.com/hardwaresolution.html");
    }
    
const getSolution = function(){
    document.write("loading please wait... study in the U.S.A | U.K | Canada | Europe");
    window.location.assign("https:/\/www.benitapollosolutions.com/educationstudy.html");
}

const openSuite = function(){
    document.write("loading please wait...");
    window.location.assign("https:/\/www.benitapollosolutions.com/educationsolution.html");
  }
  
  const openCalSys = function (){
      document.write("loading please wait...");
       window.location.assign("https:/\/www.benitapollosolutions.com/getdemo.html")
  }
  
 const Subscribe = function (){
     document.write("loading please wait...");
     
     window.location.assign("https:/\/eepurl.com/iVSgP2");
 }
 
 const openClass = function (){
      document.write("loading... please wait");
      
      window.location.assign("https:/\/tinyurl.com/25s9w8wq")
  }
  
  const openDeveloper = function (){
     document.write("loading... please wait");
     
     window.location.assign("https:/\/tinyurl.com/2dfcmn6h")
  }
  
  const openShop = function (){
      document.write("loading... please wait");
      
      window.location.assign("https:/\/tinyurl.com/235p5aee")
  }
  
 //search controller 
 const searchHelper = function (){
 let searxh = document.getElementById("searchterms").value;
let thesearxh = searxh.trim();
let searchresults;
let notfound;
  let inventory = ["Solutions","Education","Health","solutions","education","health", "Ga-South Clientele"];
  for(count=0;count<inventory.length;count++){
      if(thesearxh.includes(inventory[count])){
          notfound = 1;
          console.log("search found");
          if(typeof(Storage) !== "undefined"){
              localStorage.searchresults = inventory[count];
              if(localStorage.searchresults === "Ga-South Clientele"){
                  document.write("loading... please wait");
                  window.location.assign("https:/\/www.benitapollosolutions.com/basbusiness.html");
              }
              else{
           document.write("loading... please wait"); window.location.assign("https:/\/www.benitapollosolutions.com/searchresult.html");
           }
          }
      }else{
          notfound = 2;
      }
  }
  
  if(notfound % 2 == 0){
      alert("not found");
      notfound = "found";
  }
}

const searchResult = function (){
let _searchterms = localStorage.searchresults;
    let contheader = document.querySelector("#searchheader");
    let contres = document.querySelector("#searchres1");
    document.querySelector("#resname").innerHTML = localStorage.searchresults;
    switch(localStorage.searchresults){
        case "Solutions" || "solutions":
            contheader.innerHTML = "Looking for: " + _searchterms + " <span class='badge rounded-pill bg-info'>11</span>";
        document.querySelector("#searchres1").innerText = "Solutions";
        document.querySelector("#searchres2").innerText = "Demo";
        break;
        case "Education" || "education":
           contheader.innerHTML = "Looking for: " + _searchterms + " <span class='badge rounded-pill bg-info'>106</span>";
           document.querySelector("#searchres1").innerText = "Up next";
           document.querySelector("#searchres2").innerText = "Solutions";
           break;
    }
}

//shoot tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
