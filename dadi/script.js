// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Bonus
// Invece di generare il numero random per l'utente, chiedilo con un prompt!

// Genero un array contenente i numeri di un dado 
const diceNumbers = [];
for(i=1; i<=6; i++){
    diceNumbers.push(i);
}

// definisco il numero più piccolo e il numero più grande del dado 
const minNumber= diceNumbers[0];
const maxNumber = diceNumbers[diceNumbers.length - 1];

// Genero i due numeri randomici da 1 a 6 
const userNumber =  Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
console.log("Il numero dell'utente è ", userNumber);
const computerNumber =  Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
console.log("Il numero del computer è ", computerNumber);

// Messaggi di Vittoria, Sconfitta o Pareggio 
const winningMessage = "bravo, hai vinto";
const losingMessage = "Ritenta, sarai più fortunato";
const tyingMessage = "Avete fatto lo stesso numero";


// Condizione: verifico quale numero tra quello dell'utente e quello del computer è più grande 
if(userNumber > computerNumber ){
    console.log(winningMessage);
} else if (computerNumber > userNumber){
    console.log(losingMessage);
} else {
    console.log(tyingMessage);
}

