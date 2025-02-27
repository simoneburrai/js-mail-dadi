# Mail & Dadi


## Info 

Nell'esercizio di oggi, salvato come progetto n.21, bisogna realizzare due programmi con **javascript**.

Il primo programma, salvato nella folder *mail*, ha come obiettivo richiedere una mail da parte dell'utente e controllare se questa mail è presente all'interno di una lista di mail degli invitati.

Il secondo programma, salvato nella folder *dadi*, rappresenta un gioco di dadi tra l'utente e il computer. L'obiettivo è generale un numero randomico tra 1 e 6 sia per l'utente che per il computer e verificare qual'è il numero più grande, in modo da determinare chi ha vinto la sfida.

*Bonus*: Invece di generare il numero random per l'utente, permettere all'utente di inserirlo manualmente.



 *Qui di seguito viene riportato l'algoritmo di ogni programma in forma scritta, dove viene analizzato tutto il procedimento.*

## Algoritmo MAIL

1. Inizializziamo un **Array** contenente un tot di email.
2. Inizializziamo una variabile contenente una mail che inserirà l'utente tramite **prompt**.
3. Creiamo un ciclo che parte da indice 0 e finchè è minore della lunghezza dell'array esegue i seguenti comandi e successivamente l'indice aumenta di uno:
    Se la mail inserita dall'utente è uguale alla mail presente nell'array a quel determinato indice allora stampa un messaggio di invito;
    Altrimenti, stampa un messaggio che dichiari che la persona non è presente tra la lista degli invitati.

## Algoritmo DADI

1. Inizializziamo una variabile contenente un numero random da 1 a 6 (compreso) che corrisponde
al numero dell'utente.
2. Inizializziamo una variabile contenente un numero random da 1 a 6 (compreso) che corrisponde
al numero del computer.
3. Creiamo una condizione:
    Se il numero generato dall'utente è più grande allora mandiamo in stampa un messaggio che comunichi la vittoria dell'utente;
    Altrimenti se il numero generato dal computer  è più grande allora mandiamo in stampa un messaggio che comunichi la vittoria del computer;
    Altrimenti sia l'utente che il computer hanno avuto lo stesso numero, quindi stampiamo un messaggio di pareggio.

