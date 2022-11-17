let compWin = 0;
let userWin = 0;


function getComputerChoice() {
	let compChoice = Math.floor(Math.random() * 3 + 1);
	if (compChoice == 1) {
		compChoice = "rock";
	} else if (compChoice == 2) {
		compChoice = "papper";
	} else {
		compChoice = "scissors";
	}
	return compChoice;
}


function getUserChoice() {
	let userChoice = prompt("Rock, papper or scissors");
    userChoice = userChoice.toLowerCase();
	if (userChoice == "rock") {
	userChoice = "rock";
	} else if (userChoice == "papper") {
	userChoice = "papper";
	} else if (userChoice == "scissors") {
	userChoice = "scissors";
	} else {
		alertInvalidSelection();
        return userChoice;
	}
	return userChoice;
}

function alertInvalidSelection() {
	alert("Wrong selection, try rock, papper or scissors only");
	getUserChoice(); 
}

function playRound (userChoice, compChoice, compWin, userWin) {
	userChoice = getUserChoice();
	compChoice = getComputerChoice();
	if (userChoice == "scissors" && compChoice == "rock") {
		return compWin = compWin + 1;
	} else if (userChoice == "rock" && compChoice == "papper") {
		return compWin = compWin + 1;
	} else if (userChoice == "papper" && compChoice == "rock") {
		return userWin = userWin + 1;
	} else if (userChoice == "scissors" && compChoice == "papper") {
		return userWin = userWin + 1;
	} else if (userChoice == "rock" && compChoice == "scissors") {
		return userWin = userWin + 1;
	} else if (userChoice == "papper" && compChoice == "scissors") {
		return compWin = compWin + 1;
	} else {
		return "Draw";
	}
}

function gameToFive (compWin, userWin) {
	for (let i = 0; i < 5; i++) {
		playRound();
		console.log(compWin, userWin);
	}
}