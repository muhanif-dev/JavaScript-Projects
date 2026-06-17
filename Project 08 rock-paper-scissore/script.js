let rock = document.getElementById("rock");
let papper = document.getElementById("papper");
let scissore = document.getElementById("scissore");
let msg = document.getElementById("msg");

let userScore = document.getElementById("userScores");
let compScore = document.getElementById("compScores");

let actualUserScore = 0;
let actualCompScore = 0;

let userChoice = "rock";
let compChoice = "rock";

rock.addEventListener("click",() => {
     findUserChoice ();
});
papper.addEventListener("click",() => {
     findUserChoice ();
});
scissore.addEventListener("click",() => {
     findUserChoice ();
});


function findUserChoice () {

    rock.onclick = () => {
        userChoice = rock.getAttribute("name");
}

 papper.onclick = () => {
        userChoice = papper.getAttribute("name");
}

 scissore.onclick = () => {
        userChoice = scissore.getAttribute("name");
}
findCompChoice ();
}


function findCompChoice () {
    let possiable = ["rock","papper","scissore"]
    let rValue = Math.floor(Math.random() * 3);
        compChoice = possiable[rValue];
     whoWin ();
}


function whoWin () {
       if(userChoice === compChoice) {
               console.log("Draw");  
       } 
       
       else if (userChoice === "rock" && compChoice === "papper") {
            compScoreUpdate ();
            msg.innerText = `${compChoice} beats ${userChoice}`
       } 
       else if (userChoice === "rock" && compChoice === "scissore") {
             userScoreUpdate ();
             msg.innerText = `${userChoice} beats ${compChoice}`
       } 
       

       else if (userChoice === "papper" && compChoice === "rock") {
             userScoreUpdate ();
             msg.innerText = `${userChoice} beats ${compChoice}`
       } 
       else if (userChoice === "papper" && compChoice === "scissore") {
            compScoreUpdate ();
           msg.innerText = `${compChoice} beats ${userChoice}`
       }


       else if (userChoice === "scissore" && compChoice === "rock") {
            compScoreUpdate ();
            msg.innerText = `${compChoice} beats ${userChoice}`
       } 
       else if (userChoice === "scissore" && compChoice === "papper") {
             userScoreUpdate ();
             msg.innerText = `${userChoice} beats ${compChoice}`
       }
        

}

function userScoreUpdate () {
    actualUserScore ++;
    userScore.innerText = actualUserScore;
}

function compScoreUpdate () {
    actualCompScore ++;
    compScore.innerText = actualCompScore;
}

