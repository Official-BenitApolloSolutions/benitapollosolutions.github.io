let today = new Date();
let month = today.getMonth()+1;
let day = today.getDay();

//convert hex
function ConverttoHex(){
let userinput = document.getElementById("conv-number").value;

let answer = document.getElementById("answer");

    const binary = parseInt(userinput,16).toString(2);

console.log(binary);
   answer.textContent = binary;
}

// convert binary
 function ConverttoBinary(){
     let userinput = document.getElementById("user-input").value;
     const dec = parseInt(userinput,2).toString(16);
     comsole.log(dec);
     document.getElementById("answer").textContent = dec;
 }
 
/*
function Celebweek(today){
        let ramweek = today.toISOString().split('W');
        return parseInt(ramweek[1]);
    }
   // let salah = Celebweek(today);
   if(typeof Celebweek(today)!= NaN){
       console.log(Celebweek(today));
   }
   */
    
function animateAnn(){
    document.getElementById("ann").textContent = "🎉";
   
    let rammon = 3;
    let count = 3;
    if(month==3 && count!=0){
        document.getElementById("ann").textContent = "👑"; document.getElementById("ann-week").textContent = count + " days since independence.";
        count++
    }
    
}

function ReligiousFunction(){
let salahday = new Date("2025-03-31T01:03:00");
let xmas = new Date("2025-12-25T00:00:00");

    if(salahday == today){
      console.log("hello salah");
      document.getElementById("anniversary").innerHTML = "<div class='alert alert-success alert-dismissible fade show'><button class='btn-close' type='button' data-bs-dismiss='alert'></button><strong><span>🎉</span></strong> <span> Eid Mubarak!</span> <a class='alert-link text-uppercase' href='javacript:void(0)'>Salah</a></div>";
    }
    if(xmas == today){
        console.log("Ho! ho! ho! its Christmas");
      document.getElementById("anniversary").innerHTML = "<div class='alert alert-success alert-dismissible fade show'><button class='btn-close' type='button' data-bs-dismiss='alert'></button><strong><span>🎉</span></strong> <span> Merry Christmas!</span> <a class='alert-link text-uppercase' href='javacript:void(0)'>Share gifts</a></div>";
    }
}

animateAnn();
ReligiousFunction();

//Kilobit