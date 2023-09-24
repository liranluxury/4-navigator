let positionLat = 10;
let positionLong = 20;
let adressLat = 15;
let adressLong = 25;
const formula = Math.sqrt(
  (adressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2
);
console.log(formula);
