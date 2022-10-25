/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const eleMailUser = prompt('inserisci la tua e-mail');
const eleMailLIst = ["marcorossi@gmail.com", "mariobianchi@gmail.com", "francescoverdi@gmai.com", "martinarossi@gmail.com", "claudiabianchi@gmail.com", "gaianeri@gmail.com", "marcoverdi@gmail.com", "carlottabianchi@gmail.com"];
    for (let i = 0; i < eleMailLIst.length; i++) {
        //console.log(eleMailLIst[i]);
        if (eleMailUser === eleMailLIst [i]) {
            console.log ("l'e-mail inserita è corretta");
        } else if (eleMailUser != eleMailLIst [i]) {
            console.log ("l'e-mail inserita è sbagliata, inseriscine un'altra o registrati");
        } 
    }

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

    if (userDice > computerDice && userDice != computerDice) {
        console.log ("Hai vinto!");
        document.getElementById("winner").innerHTML = "Hai vinto!";
    } 
    if (userDice < computerDice && userDice != computerDice) {
        console.log ("Hai perso!");
        document.getElementById("loser").innerHTML = "Hai perso!";
    }
    
}
