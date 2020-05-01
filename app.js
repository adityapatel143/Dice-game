/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, current, activePlayer;

score = [0,0];
current = 0;
activePlayer = 0;

// Reset the game
function newGame() {
	score = [0,0];
	current = 0;
	activePlayer = 0;
	document.querySelector("#current-0").innerText = current;
	document.querySelector("#current-1").innerText = current;
	document.querySelector("#score-0").innerText = current;
	document.querySelector("#score-1").innerText = current;
	document.querySelector("#name-0").innerText = 'Player 1';
	document.querySelector("#name-1").innerText = 'Player 2';
	document.querySelector("#name-0").style.color = 'black';
	document.querySelector("#name-1").style.color = 'black';

}

// Get new Dice number
 function diceNumber() {
	var randomNumber = parseInt(Math.floor((Math.random() * 6) + 1));
	document.querySelector(".dice").src = "dice-" + randomNumber + ".png";
	if (randomNumber == 1){
		changePlayer();
	}
	else {
		current = current + randomNumber;
		document.querySelector("#current-"+ activePlayer).innerText = current;
	}
}


// activate the alternate player
function changePlayer() {
	if (activePlayer == 0){
		document.getElementsByClassName("player-0-panel")[0].className = "player-0-panel";
		document.getElementsByClassName("player-1-panel")[0].className = "player-1-panel active";
		current = 0;
		document.querySelector("#current-"+ activePlayer).innerText = current;
		activePlayer = 1;
	}
	else {
		document.getElementsByClassName("player-1-panel")[0].className = "player-1-panel";
		document.getElementsByClassName("player-0-panel")[0].className = "player-0-panel active";
		current = 0;
		document.querySelector("#current-"+ activePlayer).innerText = current;
		activePlayer = 0;
	}
}

function winner() {
	document.querySelector("#name-"+activePlayer).innerText = 'WINNER';
}

// This is for start new game
document.querySelector('.btn-new').addEventListener('click',function(){
	newGame();
});

// This is for Roll Dice
document.querySelector('.btn-roll').addEventListener('click',function(){
	diceNumber();
});

// This is for Hold button
document.querySelector('.btn-hold').addEventListener('click',function(){

	score[activePlayer] = score[activePlayer] + current;
	document.querySelector("#score-"+ activePlayer).innerText = score[activePlayer];
	if (score[activePlayer] >= 100) {
		document.querySelector("#name-"+ activePlayer).innerText = "WINNER";
		document.querySelector("#name-"+ activePlayer).style.color = 'red';
	}
	changePlayer();
});
