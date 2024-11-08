/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Stringhe: dati e valori espressi in sequenze di caratteri sempre messe tra virgolette ad esempio "Ciao!" 
Numeri: dati e valori espressi in numeri interi o decimali, non hanno virgolette, quindi scriviamo 1, 2, 3, ecc
Boolean: valori che vengono espressi con vero o falso (true or false in inglese)
Undefined: variabili a cui vengono assegnati valori indefiniti, è come se avessimo una scatola nella quale non sappiamo che oggetti vi siano.
Null: dati che hanno valore nullo. Ad esempio nella scatola ci sono degli oggetti senza valore.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Francesca"
console.log ( "nome", myName )

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1 = 12
let numero2 = 20

function somma(numero1, numero2) {
  let sommaNumeri = numero1 + numero2
  return sommaNumeri
}

console.log ("Somma dei due numeri", numero1 + numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

console.log ("valoredix", x)




/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const myName1 ="Palmeri"

console.log ("Cognome", myName1)


try{ myName = "Palmeri" } catch (error) { console.error ("Errore durante la riassegnazione di myName:", error.message) }



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numeri4 = 4

function sottrazione (numeri4, x ){
  let sottrazioneNum = numeri4 - x;
  return sottrazioneNum; 
}

console.log ("Sottrazione", numeri4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1= "john"
const name2= "John"

console.log('name1 e name2 sono uguali:', name1 === name2) //in questo caso semplicemente diciamo che name1 e name2 hanno falsa uguaglianza
console.log(
  'name1 e name2 in lowercase sono uguali:',
  name1.toLowerCase() === name2.toLowerCase() //Scrivendo .toLowerCase e mettendo === diciamo che name1 e name2 sarebbero uguali se trasformati in lowercase
)
