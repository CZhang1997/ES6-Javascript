// Map => return a new create array

var numbers = [1, 2, 3];
var doubleNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers);
console.log(doubled);

var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "expensive" },
];

var prices = cars.map((car) => {
  return car.price;
});
console.log(prices);
