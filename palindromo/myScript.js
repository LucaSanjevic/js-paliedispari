var parolaUtente = prompt('Inserisci una parola..');
controllaSePalindroma(parolaUtente);
function controllaSePalindroma(parola) {
    var stringaInvertita = "";
    for(var i = parola.length - 1; i >= 0; i--) {
        stringaInvertita += parola[i];
    }
    return stringaInvertita === parola;
}
var risultato = controllaSePalindroma(parolaUtente);
console.log(risultato);