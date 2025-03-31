function searchHelper(){
 let searxh = document.getElementById("searchterms").value;
let thesearxh = searxh.trim();
let searchresults;
let notfound = 0;
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

function botHelper(){
  console.log("i got executed");
}

function Senddata(){
     alert("Hot wire🔥\n\nAgents are online");
     console.log("hello world!");
}

setTimeout(botHelper(),10000);