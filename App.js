"use strict";

function getComputerChoise() {
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

function playerSelection() {
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
        return
	}
    console.log(userChoice);
	return userChoice;
}

function alertInvalidSelection() {
	alert("Wrong selection, try rock, papper or scissors only");
	playerSelection(); 
}
