// jSnack 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// -----------------------------------------------------------------------------

gGatsby = ["pippo", "pluto", "paperino", "paperone", "topolino", "gambadilegno"];

var utente = prompt("Inserisci il tuo nome:");
var vaiDentro = false;
for (var i = 0; i < gGatsby.length; i++) {
    if (utente == gGatsby[i]) {
        vaiDentro = true;
    }
}

if (vaiDentro) {
    console.log("ok, " + utente + " Sei invitato alla festa, entra pure");
} else {
    console.log("Mi spiace, " + utente + " NON sei invitato alla festa");

}