/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto (name, oraFinta) {
    const ora = oraFinta || new Date().getHours();
    let message;
if (ora < 13) {
    message = "Buongiorno";
} else if (ora < 17) {
    message = "Buon pomeriggio";
} else {
    message = "Buonasera";
}
return message + " " + name;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));
// test
console.log(saluto(name, 9));
console.log(saluto(name, 15));
console.log(saluto(name, 18));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.