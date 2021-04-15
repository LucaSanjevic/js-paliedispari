var pariodispari = prompt("Pari o dispari?");
var inserisciNumero = prompt("Inserisci un numero da 1 a 5");

getSomma(pariodispari, inserisciNumero)
// funzione che genera un numero random da 1 a 5
function getSomma(_pariodispari, _inserisciNumero) {
    var num = Math.floor(Math.random()*5);
    var somma = num + _inserisciNumero;
    if(somma % 2 == 1) {
        if(_pariodispari == "Pari") {
            return console.log("Hai vinto, il numero è pari");
                                 }
        else if(_pariodispari == "Dispari") {
            return console.log("Hai perso, il numero è pari");
      }
    }
    else  {
        if (_pariodispari == "Pari") {
            return console.log("Hai perso, il numero è dispari");
            }
            else if(_pariodispari == "Dispari") {
              return console.log("Hai vinto, il numero è dispari");
            }
    }

  }

  var risultato = getSomma(_pariodispari, _inserisciNumero);

  console.log(risultato);