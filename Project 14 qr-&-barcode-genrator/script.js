
const input = document.getElementById("input");
const btn = document.getElementById("btn");

// const barBtn = document.getElementById("bar-btn");
// const barCodeInput = document.getElementById("bar-code-input");

const img = document.getElementById("img");
// const barImg = document.getElementById("bar-img");

const download = document.getElementById("download");
// const barDownload = document.getElementById("bar-download");

btn.addEventListener("click", () => {
        //  alert("hello");
        img.classList.remove("img");
        download.classList.remove("download");
        img.src = "https://quickchart.io/qr?text=" + input.value;
        const imgLink = img.src;
        download.href = imgLink;
});


// barBtn.addEventListener("click", () => {
//         JsBarcode("#barcode", barCodeInput.value, {
//     format: "code128",
//     displayValue: true,
//     fontSize: 24,
//     lineColor: "#000",
//   });
// })





let barInput = document.getElementById("bar-input");
let barBtn = document.getElementById("bar-btn");
const barAnker = document.getElementById("bar-anker");
const barCodeImg = document.getElementById("barcode-img");
const downloadImg = document.getElementById("download-img");

barBtn.addEventListener("click", () => {
        downloadImg.classList.remove("download-img");
        barCodeImg.classList.remove("bar-code-img")
        barAnker.classList.remove("download");
  JsBarcode("#barcode-img", barInput.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });
  const getSrc = document.getElementById("barcode-img").src;
  barAnker.href = getSrc;
});
window.onload = (event) => {
  barInput.value = "";
};


// const modeBtn = document.getElementById("modeBtn");
// const header = document.querySelector("header");
// const body = document.querySelector("body");
// const programSection = document.getElementById("program-section");
// const aboutSection = document.getElementById("about-section");
// const aboutH1 = document.getElementById("about-h1");
// const programH1 = document.getElementById("program-h1");
// let mode = "light";
// modeBtn.addEventListener("click", () => {
//   if (mode === "light") {
//     header.style.backgroundColor = "black";
//      body.style.backgroundColor = "rgba(19, 14, 14, 0.8)";
//      programSection.style.backgroundColor = "black";
//      aboutSection.style.backgroundColor = "black";
//      aboutH1.style.color = "white";
//      programH1.style.color = "white";
//      mode = "dark";
//   } else if (mode === "dark") {
//     header.style.backgroundColor = "#4B1D6A";
//      body.style.backgroundColor = "white";
//       programSection.style.backgroundColor = "white";
//       aboutSection.style.backgroundColor = "white";
//      mode = "light";
//   }
     
// })