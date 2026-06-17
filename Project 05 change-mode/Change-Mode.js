let btn = document.querySelector("#modebtn");
let body = document.querySelector("body");
let currentMode = "light";
btn.addEventListener("click",()=>{
           if(currentMode === "light"){
            currentMode = "dark";
            document.querySelector("body").style.backgroundColor = "black";
           }
           else{
            currentMode = "light";
                 document.querySelector("body").style.backgroundColor = "white";
           }
           console.log(currentMode);
});
