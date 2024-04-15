let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choices1")

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const drowGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw / play again"
    msg.style.backgroundColor = "#081b31"
}


const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log(`You win! Your ${userChoice} beats ${compChoice}`);
        msg.innerText = `You win! You ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log(`You lose. You ${userChoice} beats ${compChoice}`);
        msg.innerText = `You lose. Your ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const genCompChoice = () => {
let option = ["rock", "paper", "scissor"]
let randIdx = Math.floor(Math.random()* 3)
return option[randIdx]
}



const playGame = (userChoice) => {
console.log("user choice =", userChoice);
const compChoice = genCompChoice();
console.log("comp choice =", compChoice);

if (userChoice === compChoice) {
    drowGame()
} else{
    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true ; 
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true;
    } else{  
         userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice, compChoice );
}
}


choices.forEach((choices1) => {
    choices1.addEventListener("click", () => {
        const userChoice = choices1.getAttribute("id")
        // console.log("choiceeeeeee" , userChoice);
        playGame(userChoice)
    })
})
const choices1 = document.querySelectorAll(".choices2")

choices1.forEach((choices2) => {
    choices2.addEventListener("click", () => {
        const userChoice = choices2.getAttribute("id")
        // console.log("choiceeeeeee" , userChoice);
        playGame(userChoice)
    })
})
const choices2 = document.querySelectorAll(".choices3")

choices2.forEach((choices3) => {
    choices3.addEventListener("click", () => {
        const userChoice = choices3.getAttribute("id")
        // console.log("choiceeeeeee" , userChoice);
        playGame(userChoice)
    })
})
