// Dato l’array di nomi const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
// Dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
let arrayForEach = [];
const min = 1;
const max = 4;

// forEach
myArray.forEach((element, i) => {
  if () {
    arrayForEach.push(i >= min && i <= max)
  }
});

console.log(arrayForEach);


// filter
let arrayFilter = myArray.filter((element, i) => {
  return i >= min && i <= max;
})

console.log(arrayFilter);