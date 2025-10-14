/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// @param {array}
// @param {letter}

// Dichiara la funzione qui.
function StringEletter (array, letter) {
let iniziali = [];
for (let i = 0; i < array.length; i++) {
let name = array[i];
if (name [0] === letter) {
    iniziali.push(name);
}
}
return iniziali;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(StringEletter(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]