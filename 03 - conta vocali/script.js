/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali(stringa) {
    let count = 0;
    const arrayVocali = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < stringa.length; i++) {
        let lettera = stringa[i];
        if (arrayVocali.includes(lettera)) {
            count++
        }
    }
    return count;
}
console.log(vocali(word));



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)