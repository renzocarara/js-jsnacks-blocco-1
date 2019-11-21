// JSnack 8
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
//------------------------------------------------------------------------------


var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // caratteri ammessi
var result = 0; // risultato della somma
var fourDigitNum = ""; //input dell'utente
var valid; // validità dell'input utente
do {
    valid = true;
    // chiedo all'utente il numero di 4 cifre,
    // continuo a ciclare se l'input non è lungo almeno 4 caratteri
    fourDigitNum = prompt("Inserisci un numero di 4 cifre [0000-9999]:");
    if (fourDigitNum.length != 4) {
        valid = false; // utente non ha inserito esattamente 4 caratteri
        alert("ATTENZIONE: non hai introdotto 4 cifre [0000-9999], riprova.");
    } else {
        // l'utente ha inserito 4 caratteri, controllo i 4 caratteri uno ad uno
        // verifico che siano un carattere da 0 a 9, cioè siano dei numeri
        for (var i = 0; i < fourDigitNum.length; i++) {
            // la indexOf() mi ritorna -1 se l'elemnto cercato non è presente
            if (digits.indexOf(fourDigitNum[i]) == -1) {
                valid = false; // non è un carattere numerico
            }
        }
        if (!valid) {
            alert("ATTENZIONE: devi inserire solo numeri [0000-9999], riprova.");
        }
    }
}
while (!valid);

// tratto la stringa di input come un array
for (var i = 0; i < fourDigitNum.length; i++) {
    // scorro la stringa e prendo uno a uno i caratteri e li sommo
    result += parseInt(fourDigitNum[i]);
}

console.log("Hai inserito", fourDigitNum, "\nLa somma di:",
    fourDigitNum[0], "+",
    fourDigitNum[1], "+",
    fourDigitNum[2], "+",
    fourDigitNum[3], "è uguale a ", result);