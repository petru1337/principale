console.log('Esercizio 1')
{

    /*
    Scrivi una funzione che prenda in input un array di 6 oggetti rappresentanti persone (nome, cognome, età) e
    restituisca un nuovo array contenente solo le persone con un'età superiore a 30 anni.
    Stampare le informazioni
    di tutte le persone del nuovo array.
    */

    let people = [
        { Nome: 'Mario', Cognome: 'Rossi', Eta: 12 },
        { Nome: 'Giovanni', Cognome: 'Verdi', Eta: 13 },
        { Nome: 'Petru', Cognome: 'Furbo', Eta: 31 },
        { Nome: 'Alice', Cognome: 'Casiraghi', Eta: 15 },
        { Nome: 'Michele', Cognome: 'Stalker', Eta: 42 },
        { Nome: 'Riccardo', Cognome: 'Degni', Eta: 45 }
    ];

    function prendiEtaSuperioreA30(people) {
        let piuDi30 = [];
        for (let i = 0; i < people.length; i++) {
            if (people[i].Eta > 30) {
                piuDi30.push(people[i]);
            }
        }

        return piuDi30;
    }

    let result = prendiEtaSuperioreA30(people);

    for (let i = 0; i < result.length; i++) {
        console.log('Nome:', result[i].Nome);
        console.log('Cognome:', result[i].Cognome);
        console.log('Eta:', result[i].Eta);
        console.log(' ')
    }

}
console.log('Esercizio 2')
{
    /*
 Scrivi una funzione chiamata moltiplicaArray che prenda in input un array di numeri e un numero intero, che
 funge da "fattore di moltiplicazione". La funzione deve restituire un nuovo array in cui ogni numero
 dell'array
 originale è moltiplicato per il fattore di moltiplicazione dato.
 Chiamare la funzione 3 volte, con 3 array e 3 fattori di moltiplicazione differenti per 
 stampare in output i 3
 array prodotti.
 
 */

    function moltiplicaArray(arrayConNumeri, numeroDaMoltiplicare) {
        let arrayFinale = [];
        for (let i = 0; i < arrayConNumeri.length; i++) {
            arrayFinale.push(arrayConNumeri[i] * numeroDaMoltiplicare);
        }
        return arrayFinale;
    }

    let array1 = [1, 2, 3, 4, 5]
    let moltiplicante1 = 2
    let risultato1 = moltiplicaArray(array1, moltiplicante1)
    console.log(risultato1)

    let array2 = [6, 7, 8, 9, 10]
    let moltiplicante2 = 4
    let risultato2 = moltiplicaArray(array2, moltiplicante2)
    console.log(risultato2)

    let array3 = [11, 12, 13, 14, 15]
    let moltiplicante3 = 6
    let risultato3 = moltiplicaArray(array3, moltiplicante3)
    console.log(risultato3)

}
console.log('Esercizio 3')
{
    /*
Scrivi una funzione chiamata unisciSet che prenda in input due set composti da 5 numeri ciascuno,
e restituisca
un nuovo set contenente tutti gli elementi del primo che NON sono presenti nel secondo.
Stampare in output il set risultante.

*/

    function unisciSet(primoSet, secondoSet) {
        let nonPresenteNelPrimo = new Set();

        primoSet.forEach(function (num) {
            if (!secondoSet.has(num)) {
                console.log(`Il numero ${num} e' presente solo nel primo set`)
                nonPresenteNelPrimo.add(num);
            }
            else {
                console.log(`Il numero ${num} e' presente anche nel secondo set`)
            }
        });

        return nonPresenteNelPrimo;
    }

    let primoSet = new Set([1, 2, 3, 4, 5]);
    let secondoSet = new Set([4, 5, 6, 7, 8]);

    console.log(unisciSet(primoSet, secondoSet));
}
console.log('Esercizio 4')
{
    /*
    Crea una funzione chiamata salutaPersona che prende in ingresso un oggetto.
    Se l'oggetto passato come parametro NON ha una proprietà chiamata "rate", la funzione stampa il messaggio
    "nessun rate". In caso contrario, se il valore della proprietà rate è compreso tra 0 e 10, stampa 
    "rate basso", se
    è compreso tra 11 e 50 stampa "rate medio", se è compreso tra 51 e 100 stampa "rate alto".
    es
    salutaPersona({nome: mario rossi}) -> nessun rate
    salutaPersona(rate: 95) -> rate alto
    */

    function salutaPersona(persona) {
        if (persona.rate === false) {
            console.log('Nessun rate')
        }
        else {
            let rate = persona.rate;
            if (rate >= 0 && rate <= 10) {
                console.log('rate basso')
            } else if (rate >= 11 && rate <= 50) {
                console.log('rate medio')
            } else if (rate >= 51 && rate <= 100) {
                console.log('rate alto')
            }
        }
    }

    salutaPersona({ nome: 'Mario Rossi' })
    salutaPersona({ rate: 51 })

}

console.log('Esercizio 5')
{
    /*
    Scrivi una funzione chiamata calcolaGiorni che prenda in input due oggetti Date rappresentanti due date
    diverse e restituisca il numero di giorni trascorsi tra le due date.
    Chiamare la funzione per stampare in output il risultato.
    La funzione deve prendere in considerazione questa caratteristica: se la seconda data è un giorno
    cronologicamente pari o successivo alla prima data, si procede con la normale esecuzione sopra elencata.
    Se la seconda data è un giorno cronologicamente precedente alla prima data, viene prodotto manualmente un
    errore che blocca l'applicazione. 
    */

    function calcolaGiorni(data1, data2) {
        if (data1 > data2) {
            throw new Error("La seconda data deve venire dopo");
        }

        //Calcolo millisecondi per giorno
        const unGiorno = 24 * 60 * 60 * 1000
        const giorniDiDifferenza = ((data2 - data1) / unGiorno);

        return giorniDiDifferenza;
    }

    // Example usage
    const data1 = new Date('2023-05-03');
    const data2 = new Date('2023-06-20');
    const days = calcolaGiorni(data1, data2);
    console.log(days)
}
console.log('Esercizio 6')
{
    /*
Scrivi una funzione confrontaOggetti che prenda in input due oggetti con caratteristiche
(proprietà e valori)
scelti a piacere e restituisca true se hanno le stesse proprietà e se tutti i valori delle loro proprietà
corrispondenti sono uguali, altrimenti false.
es
o1 = {nome: mario, cognome = rossi}
o2 = {nome: mario, cognome = rossi}
confrontaOggetti(o1, o2) da true
o1 = {nome: mario, cognome = rossi}
o2 = {x: 10, y = 20}
confrontaOggetti(o1, o2) da false

*/

    function confrontaOggetti(obj1, obj2) {
        for (let i = 0; i <= obj1.length; i++) {
            const obj1words = obj1[i];
            const obj2words = obj2[i];

            if (obj1words.length !== obj2Keys.words) {
                return false;
            }
        }
        return true
    }
    const obj1 = { name: "Mario", age: 20, city: "Milano" };
    const obj3 = { name: "Petru", age: 25, city: "Roma" };
    const obj2 = { name: "Mario", age: 20, city: "Milano" };

    console.log(confrontaOggetti(obj1, obj2));
    console.log(confrontaOggetti(obj1, obj3));
}
console.log('Esercizio 7')
{
    /*
Scrivi una funzione chiamata mappaNumeri, che prende come primo parametro un array di numeri, e come
secondo parametro una funzione che internamente a mappaNumeri sarà utilizzata come parametro per il
metodo map, chiamato per creare un nuovo array con il criterio utilizzato dalla funzione passata. 
Questo array verrà stampato internamente a mappaNumeri.
Chiamare la funzione mappaNumeri 2 volte, sia per stampare il doppio dei numeri dell'array passato come
primo parametro, sia per stampare i suoi numeri aumentati di 10.
es
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 40 60
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 30 40
dove ?fn? saranno le apposite funzioni passate come parametro create da voi
*/

    function mappaNumeri(array, newFunction) {
        let arrayConMap = array.map(newFunction)
        console.log(arrayConMap)
    }
    let doppio = function (el) {
        return el * 2
    }
    let aggiungi10 = function (el) {
        return el + 10
    }
    mappaNumeri([4, 2, 6, 4, 77], doppio)
    mappaNumeri([4, 2, 6, 4, 77], aggiungi10)
}
