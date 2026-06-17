const celsius = document.getElementById("celsius");
const fehrenheit = document.getElementById("fehrenheit");
const kalvin = document.getElementById("kalvin");

function calculation(event) {
    const newValue = +event.target.value;

     if(event.target.name === "celsius") {
        fehrenheit.value = (newValue * 1.8 + 32).toFixed(4);
        kalvin.value = (newValue + 273.32).toFixed(4);

    }  else if (event.target.name === "fehrenheit") {
        celsius.value = ((newValue - 32)/1.8).toFixed(4);
        kalvin.value = ((newValue - 32)/1.8 + 273.32).toFixed(4);

    } else if (event.target.name === "kalvin") {
        celsius.value = (newValue - 273.32).toFixed(4)
        fehrenheit.value = ((newValue - 273.32) * 1.8 + 32).toFixed(4);
    }
}


