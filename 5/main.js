// jSnack 5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
//  se è dispari inseriscilo nell’array.
// -----------------------------------------------------------------------------

var listanumeri = [];
var numero;
var i = 0;
var numOfInput = 6;

while (i < numOfInput) {
    numero = parseInt(prompt("Inserisci un numero: [Input " + (i + 1) + " di " + numOfInput + "]"));
    // console.log((numero % 2));
    if (numero % 2) {
        //il numero è dispari, lo inserisco nell'array
        listanumeri.push(numero);
    }
    i++;
}

// console.log("lunghezza-array:", listanumeri.length);
if (listanumeri.length == 0) {
    console.log("Non hai inserito alcun numero dispari");
} else {
    console.log("Questo è l'elenco dei numeri dispari inseriti", listanumeri);
}