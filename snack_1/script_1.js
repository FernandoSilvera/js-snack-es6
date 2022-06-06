// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

let bikes = [
  {
    id: "Victory",
    weight: 5,
  },
  {
    id: "Raven",
    weight: 6,
  },
  {
    id: "Ebony",
    weight: 8,
  },
  {
    id: "Ivory",
    weight: 7.1,
  },
  {
    id: "Bumblebee",
    weight: 6.8,
  },
  {
    id: "Pegasus",
    weight: 7.5,
  },
  {
    id: "Cerberus",
    weight: 8.5,
  },
];
let lightestBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
  const bike = bikes[i];
  const {id, weight} = bike;
  
  if (weight < lightestBike.weight) {
    lightestBike = bike;
  }
}

console.table(lightestBike);