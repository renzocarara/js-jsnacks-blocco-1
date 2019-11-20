// JSnack 8
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
//------------------------------------------------------------------------------
var result = 0; // risultato della somma
var fourDigitNum = ""; //input dell'utente
do {
    // chiedo all'utente il numero di 4 cifre,
    // continuo a ciclare se l'input non è lungo almeno 4 caratteri
    fourDigitNum = prompt("Inserisci un numero di 4 cifre:");
    if (!(fourDigitNum.length == 4)) {
        alert("ATTENZIONE: non hai introdotto 4 cifre, riprova.");
    }
}
while (!(fourDigitNum.length == 4));

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