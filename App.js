let userWin = 0;
let compWin = 0;

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
	}
	return userChoice;
}

function alertInvalidSelection() {
	alert("Wrong selection, try rock, papper or scissors only");
	getUserChoice();
}

function playRound(userChoice, compChoice) {
	compChoice = getComputerChoice();
	userChoice = getUserChoice();
	let result;
	if (userChoice == "scissors" && compChoice == "rock") {
		return result = 1;
	} else if (userChoice == "rock" && compChoice == "papper") {
		return result = 1;
	} else if (userChoice == "papper" && compChoice == "rock") {
		return result = 2;
	} else if (userChoice == "scissors" && compChoice == "papper") {
		return result = 2;
	} else if (userChoice == "rock" && compChoice == "scissors") {
		return result = 2;
	} else if (userChoice == "papper" && compChoice == "scissors") {
		return result = 1;
	} else {
		return "Draw";
	}
}
function gameToFive() {
	for (let i = 0; i < 5; i++) {
		a = playRound();
		if (a == 1) {
			compWin++
		} else if (a == 2) {
			userWin++;
		}
		console.log(compWin, userWin);
	}
}
