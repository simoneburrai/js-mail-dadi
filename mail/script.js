// Definizione Array contente lista di mail degli invitati 
const invitationMailList = ["goku@gmail.com", "vegeta@gmail.com", "freezer@gmail.com", "radish@gmail.com"]

// Definizione variabile contenente mail inserita dall'utente 
let mailUser = prompt("Inserisci la tua mail, per verificare se sei stato invitato alla festa");

// Transformo la variabile una stringa con tutti caratteri minuscoli, per evitare case sensitivity 
mailUser = mailUser.toLowerCase();

// Creazione variabili contenenti messaggi di invito o di non invito 
const invitationMessage = "Complimenti, sei stato invitato alla festa";
const notInvitationMessage = "Mi dispiace, il tuo nome non risulta nella lista degli invitati";

// Condizione per controllare se la mail inserita dall'utente è presente
// nell'array contenente la lista degli invitati
for(i=0; i < invitationMailList.length; i++){
    const invitationMail = invitationMailList[i];
    if(mailUser === invitationMail){
    console.log(invitationMessage);//stampa messaggio d'invito
    break; //Se la mail è presente esci dal ciclo
    } else { //Condizioine: controlla per tutta la lunghezza dell'array e stampa solo un messaggio d'errore
        if(i === invitationMailList.length -1){
        console.log(notInvitationMessage);//stampa messaggio di non invito
        }
    }
}