

function computerPlay(){
    let answer;
    answer = Math.floor(Math.random()*1000);
    if(answer % 2 === 0){
        return "rock";
    }
    else if(answer % 3 === 1){
        return "scissors";
    }
    return "paper";
}

function playround(playerSelection,computerSelection){
    let log = '';
    if(computerSelection===playerSelection){
        log= "Match Drawn!!";
    }
    else if(computerSelection === "rock" && playerSelection === "scissors"){
        log =  "Computer wins!!";
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        log =  "You win!!";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        log = "You win!!";
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        log =  "Computer wins!!";
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        log =  "You win!!";
    }
    else if(computerSelection === "Paper" && playerSelection === "rock"){
        log =  "Computer wins!!";
    }
    return log;
}

function game(){
    let playerscore = 0;
    let computerscore = 0;
    let winner;
    for(let i = 0; i<=5 ; i++){
        var playerSelection = prompt("What do you select?").toLowerCase();
        winner = playround(computerPlay(),playerSelection);
        console.log(winner);
        if(winner === "You win!!"){
            playerscore++;
        }
        else if(winner === "Computer wins!!"){
            computerscore++;
        }
        
        console.log(`your score : ${playerscore}`);
        console.log(`computer score : ${computerscore}`);
    }

    if(playerscore>computerscore){
        console.log("you are the ultimate winner!");
    }
    else if(playerscore<computerscore){
        console.log("machine wins sadly!");
    }else{
        console.log("no one wins!");
    }

}

game();

