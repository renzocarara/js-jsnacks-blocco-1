// jSnack 3: Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.
//  Esegui questo programma in due versioni, con il for e con il while.
// -----------------------------------------------------------------------------
var listaNumeri = []; // array vuoto
var somma = 0;
var maxLen = 5;

for (var i = 0; i < maxLen; i++) {
    listaNumeri[i] = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:"));
}
console.log(listaNumeri);

// versione for
// for (var i = 0; i < maxLen; i++) {
//     somma = somma + listaNumeri[i];
// }
// console.log("Somma degli input:", somma);


// versione while {
var indice = 0;
while (indice < maxLen) {
    somma = somma + listaNumeri[indice];
    indice++;
}

console.log("Somma degli input: ", somma);