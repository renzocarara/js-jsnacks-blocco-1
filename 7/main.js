// jSnack 7: Stampa le potenze di 2 fino a 1000.
// -----------------------------------------------------------------------------

var i = 0;
while (Math.pow(2, i) <= 1000) {
    console.log("2 alla", i, "=", Math.pow(2, i));
    i++;
}