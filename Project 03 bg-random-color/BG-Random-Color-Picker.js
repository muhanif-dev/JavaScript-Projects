let btn = document.getElementById('bgColor');


 btn.addEventListener('click',() =>{
        document.body.style.backgroundColor = randumColor();
    });

function randumColor()
{
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
   
}