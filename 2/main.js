// jSnack 2: L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
// -----------------------------------------------------------------------------

var word1 = prompt("Dammi la prima parola");
var word2 = prompt("Dammi la seconda parola");

if (word1.length > word2.length) {
    // prima parola più lunga
    console.log(word2 + " " + word1);

} else if (word2.length >= word1.length) {
    // seconda parola più lunga oppure stessa lunghezza
    console.log(word1 + " " + word2);

}