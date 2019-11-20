// JSnack 9
// Calcola la somma e la media dei primi 10 numeri.
// -----------------------------------------------------------------------------
var minNum = 1; // limite inferiore - inizio somma
var maxNum = 10; // limite superiore - fine somma
var somma = 0;
var media = 0;
for (var i = minNum; i <= maxNum; i++) {
    somma = somma + i;
}
media = somma / maxNum; //calcolo la media della somma
console.log("La somma dei numeri interi consecutivi da", minNum, "a", maxNum, "è: ", somma);
console.log("La media dei numeri interi consecutivi da", minNum, "a", maxNum, "è: ", media);