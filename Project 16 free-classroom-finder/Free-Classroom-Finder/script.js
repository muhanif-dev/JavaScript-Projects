function checkForm1() {
    const day = document.getElementById("day1").value.toLowerCase();
    const time = document.getElementById("time1").value;

    let message = "";
     
    if (day === "" || time === "") {
        message = "Please fill all fields";
    }

     else if (day === "monday" && time === "09:00") {
        message = "Available Rooms: <b>H-4</b> and <b>Lab</b>";
    } 

     else if (day === "monday" && time === "10:00") {
        message = "Available Rooms: <b>H-2</b> and <b>H-3</b>";
    } 

     else if (day === "monday" && time === "11:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-3</b> and <b>H-4</b>";
    } 

     else if (day === "monday" && time === "12:00") {
        message = "Available Rooms: <b>H-1</b> and <b>H-2</b>";
    } 

     else if (day === "monday" && time === "01:00") {
        message = "Available Rooms: Only <b>Lab</b>";
    } 

     else if (day === "monday" && time === "02:00") {
        message = "Available Rooms: Only in <b>H-2</b> semester 1 Section A class is not avialable";
    } 


     else if (day === "tuesday" && time === "09:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-3</b> and <b>H-4</b>";
    } 
     else if (day === "tuesday" && time === "10:00") {
        message = "Available Rooms: Only <b>Lab</b>";
    } 
     else if (day === "tuesday" && time === "11:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-3</b> and <b>H-4</b>";
    } 
     else if (day === "tuesday" && time === "12:00") {
        message = "Available Rooms: <b>H-2</b>, <b>H-3</b> and <b>Lab</b>";
    } 
     else if (day === "tuesday" && time === "01:00") {
        message = "Available Rooms: Only <b>H-3</b>";
    } 
     else if (day === "tuesday" && time === "02:00") {
        message = "Available Rooms: Only <b>H-2</b> is not avialable. There is junior's classs";
    } 


    else if (day === "wednesday" && time === "09:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-2</b>, <b>H-3</b> and <b>Lab</b>";
    } 
    else if (day === "wednesday" && time === "10:00") {
        message = "Available Rooms: <b>H-1</b> and <b>H-4</b>";
    } 
    else if (day === "wednesday" && time === "11:00") {
        message = "Available Rooms:Only <b>Lab</b>";
    } 
    else if (day === "wednesday" && time === "12:00") {
        message = "Available Rooms: <b>H-1</b> and <b>H-4</b>";
    } 
    else if (day === "wednesday" && time === "01:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-2</b> and <b>Lab</b>";
    } 
    else if (day === "wednesday" && time === "02:00") {
        message = "Available Rooms: Only <b>H-4</b> is not avialable. There is junior's classs";
    } 



    else if (day === "thursday" && time === "09:00") {
        message = "Available Rooms: Only <b>H-2</b>";
    } 
    else if (day === "thursday" && time === "10:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-3</b> and <b>Lab</b>";
    } 
    else if (day === "thursday" && time === "11:00") {
        message = "Available Rooms:<b>H-2</b>, <b>H-3</b> and <b>Lab</b>";
    } 
    else if (day === "thursday" && time === "12:00") {
        message = "Available Rooms: <b>H-3</b> and <b>H-4</b>";
    } 
    else if (day === "thursday" && time === "01:00") {
        message = "Available Rooms: <b>H-1</b> and <b>Lab</b>";
    } 
    else if (day === "thursday" && time === "02:00") {
        message = "Available Rooms: Only <b>H-4</b> is not avialable. There is junior's classs";
    } 


     else if (day === "friday" && time === "09:00") {
        message = "Available Rooms: <b>H-3</b>, <b>H-4</b> and <b>Lab</b>";
    } 
     else if (day === "friday" && time === "10:00") {
        message = "Available Rooms: <b>H-1</b> and <b>Lab</b>";
    } 
     else if (day === "friday" && time === "11:00") {
        message = "Available Rooms: <b>H-1</b>, <b>H-2</b> and <b>Lab</b>";
    } 
     else if (day === "friday" && time === "12:00") {
        message = "Available Rooms: <b>H-1</b> and <b>H-4</b>";
    } 
     else if (day === "friday" && time === "01:00") {
        message = "Available Rooms: <b>H-2</b> and <b>Lab</b>";
    } 
     else if (day === "friday" && time === "02:00") {
        message = "Available Rooms: Only <b>H-4</b> is not avialable. There is junior's classs";
    } 


     else if (day === "saturday") {
        message = "Today is Off";
    } 
     else if (day === "sunday") {
        message = "Today is Off";
    } 

    else {
        message = "No matching result found.Check spellings or time";
    }

    document.getElementById("modal-text").innerHTML = message;
    new bootstrap.Modal(document.getElementById("resultModal")).show();
}

function checkForm2() {
    const day = document.getElementById("day2").value.toLowerCase();
    const time = document.getElementById("time2").value;
    const room = document.getElementById("room2").value.toUpperCase();

    let message = "";

    if (day === "" || time === "" || room === "") {
        message = "Please fill all fields!";
        
    }

     else if (day === "monday" && time === "09:00") {
        if(room === "H-1" || room === "H-2" || room === "H-3") {
            message = `${room} is not available`;
        } 
        else if(room === "H-4" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

     else if (day === "monday" && time === "10:00") {
        if(room === "H-1" || room === "H-4" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-2" || room === "H-3") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

     else if (day === "monday" && time === "11:00") {
        if(room === "H-2" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-3" || room === "H-4") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

     else if (day === "monday" && time === "12:00") {
        if(room === "H-3" || room === "H-4" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

     else if (day === "monday" && time === "01:00") {
        if(room === "H-1" || room === "H-2" || room === "H-3"|| room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

     else if (day === "monday" && time === "02:00") {
        if(room === "H-2") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-3" || room === "H-4" ||room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
 


    else if (day === "tuesday" && time === "09:00") {
        if(room === "H-2" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-3" || room === "H-4") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

    else if (day === "tuesday" && time === "10:00") {
        if(room === "H-1" || room === "H-2" || room === "H-3" || room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

    else if (day === "tuesday" && time === "11:00") {
        if(room === "H-2" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-3" || room === "H-4") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

    else if (day === "tuesday" && time === "12:00") {
        if(room === "H-1" || room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "H-2" || room === "H-3" ||room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 

    else if (day === "tuesday" && time === "01:00") {
        if(room === "H-1" || room === "H-2" || room === "H-4" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-3") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "tuesday" && time === "02:00") {
        if(room === "H-2") {
            message = `${room} is not available`;
        } 
        else if( room === "H-1"|| room === "H-3"|| room === "H-4"|| room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 



    else if (day === "wednesday" && time === "09:00") {
        if(room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2" || room === "H-3" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "wednesday" && time === "10:00") {
        if(room === "H-2" || room === "H-3" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-4") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "wednesday" && time === "11:00") {
        if(room === "H-1" || room === "H-2" || room === "H-3" || room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "wednesday" && time === "12:00") {
        if(room === "H-2" || room === "H-3" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-4") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "wednesday" && time === "01:00") {
        if(room === "H-3" || room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "wednesday" && time === "02:00") {
        if(room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2" || room === "H-3" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 



    else if (day === "thursday" && time === "09:00") {
        if(room === "H-1" || room === "H-3" || room === "H-4" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-2") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "thursday" && time === "10:00") {
        if(room === "H-4" || room === "H-2") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-3" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "thursday" && time === "11:00") {
        if(room === "H-4" || room === "H-1") {
            message = `${room} is not available`;
        } 
        else if(room === "H-2" || room === "H-3" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "thursday" && time === "12:00") {
        if(room === "H-1" || room === "H-2" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-4" || room === "H-3") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "thursday" && time === "01:00") {
        if(room === "H-4" || room === "H-2" || room === "H-3") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "thursday" && time === "02:00") {
        if(room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2" || room === "H-3" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
     



    else if (day === "friday" && time === "09:00") {
        if(room === "H-1" || room === "H-2") {
            message = `${room} is not available`;
        } 
        else if(room === "H-3" || room === "H-4" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "friday" && time === "10:00") {
        if(room === "H-4" || room === "H-3" || room === "H-2") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "friday" && time === "11:00") {
        if(room === "H-4" || room === "H-3") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "friday" && time === "12:00") {
        if(room === "H-2" || room === "H-3" || room === "Lab") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-4") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "friday" && time === "01:00") {
        if(room === "H-4" || room === "H-1" || room === "H-3") {
            message = `${room} is not available`;
        } 
        else if(room === "H-2" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    else if (day === "friday" && time === "02:00") {
        if(room === "H-4") {
            message = `${room} is not available`;
        } 
        else if(room === "H-1" || room === "H-2" || room === "H-3" || room === "Lab") {
            message = `<b>Yes ${room} is free.</b>`;
        }
    } 
    
    else if (day === "saturday") {
        message = "Today is Off";
    } 
     else if (day === "sunday") {
        message = "Today is Off";
    } 

    else {
        message = "No matching result found.Check spellings or time";
    }

    document.getElementById("modal-text").innerHTML = message;
    new bootstrap.Modal(document.getElementById("resultModal")).show();
}
