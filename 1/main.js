// jSnack 1: L’ utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.
// -----------------------------------------------------------------------------

var num1 = parseInt(prompt("Inserisci il primo numero"));
var num2 = parseInt(prompt("Inserisci il secondo numero"));

if (num1 > num2) {
    // il primo numero è maggiore
    console.log("Il primo numero", num1, "è maggiore di ", num2);
} else if (num2 > num1) {
    // il secondo numero è maggiore
    console.log("Il secondo numero", num2, "è maggiore di ", num1);

} else {
    // i numeri sono uguali
    console.log("I due numeri", num1, "e", num2, "sono uguali");
}