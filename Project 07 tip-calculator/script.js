const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const btn = document.getElementsByClassName("btn");


function calculation() {
     const billValue = bill.value;
     const tipValue = tip.value;
     const finalResult = billValue * (1+tipValue/100);
     total.innerHTML = finalResult;
}

