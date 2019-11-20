// jSnack 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
// -------------------------------------------------------------------------------------
var seqLen = parseInt(prompt("Inserisci un numero intero:"));

// for (var i = 1; i <= seqLen; i++) {
//     console.log(Math.pow(i, 3));
// }

// senza Math.pow()
for (var i = 1; i <= seqLen; i++) {
    console.log(i * i * i);
    // console.log(i**3); // es2016
}