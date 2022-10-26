/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const arrMailList = ["marcorossi@gmail.com", "mariobianchi@gmail.com", "francescoverdi@gmai.com", "martinarossi@gmail.com", "claudiabianchi@gmail.com", "gaianeri@gmail.com", "marcoverdi@gmail.com", "carlottabianchi@gmail.com"];

const eleEmail = document.querySelector('#user-email');
const eleForm = document.querySelector('form');
const eleOuput = document.querySelector('#output');

eleForm.addEventListener('submit', function (event) {
	event.preventDefault();

	let emailFound = false;
	for (let i = 0; i < arrMailList.length; i++) {
		if (eleEmail.value === arrMailList[i]) {
			console.log('trovata');
			emailFound = true;
		}
	}

	if (emailFound) {
		eleOuput.innerHTML = 'Mail trovata';
		document.querySelector('.found').classList.add('visible');
	} else {
		eleOuput.innerHTML = 'Mail NON trovata';
		document.querySelector('.unfound').classList.add('visible');
	}
});

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let userDice;
let computerDice;

document.getElementById("roll").onclick = function () {
    userDice = Math.floor(Math.random() * 6) + 1;
    computerDice = Math.floor(Math.random() * 6) + 1;

    document.getElementById("userdice").innerHTML = userDice;
    document.getElementById("computerdice").innerHTML = computerDice;

    if (userDice > computerDice) {
        console.log ("Hai vinto!");
        document.getElementById("winner").innerHTML = "Hai vinto!";
    } else if (userDice < computerDice) {
        console.log ("Hai perso!");
        document.getElementById("loser").innerHTML = "Hai perso!";
    }
    
}

