let ring = document.getElementById("ring");
let input = document.getElementById("input");
let displaySize = document.getElementById("display-size");
let usSize = document.getElementById("us-size");
let sizeMm = document.getElementById("size-mm");


let diameter = 0;
let px = 0;
let us = 4;
input.addEventListener("input",() => {
     diameter = input.value/3.14;
 console.log("diameter is = " ,diameter);
  px = (diameter * 96)/25.4;
ring.style.width = px + "px";
ring.style.height = px + "px";
displaySize.innerText = diameter.toFixed(2) + " mm";
sizeMm.innerText = diameter.toFixed(2);
us = (diameter - 11.63)/0.8128;
usSize.innerText = us.toFixed(0);
});

