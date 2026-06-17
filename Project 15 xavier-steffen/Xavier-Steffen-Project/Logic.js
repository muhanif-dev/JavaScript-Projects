function onClickManue(){
    document.getElementById("manue").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("nav");
    document.getElementById("allTabsSection").classList.toggle("nav");
    document.getElementById("form").classList.toggle("nav");
    
    
 
}

/*Tabs*/
const tabButtons = document.querySelectorAll('.tablinks');
for(let i=0; i<tabButtons.length; i++)
{
    tabButtons[i].addEventListener('click',function()
    {
           let tabName = this.dataset.tab;
           
           let tabContent = document.getElementById(tabName);

           let allTabContent = document.querySelectorAll('.tabcontent');
           let allTabButtons = document.querySelectorAll('.tablinks');

                             for(let j=0; j < allTabContent.length ; j++) {
                                             allTabContent[j].style.display = 'none';
                                       }   

                             for(let k=0; k < allTabButtons.length ; k++) {
                                             allTabButtons[k].classList.remove('active');
                                      }    


           tabContent.style.display = "block";
           this.classList.add('active');
    });
}
 let tab1 = document.querySelector(".tablinks");
 tab1.click();
      
