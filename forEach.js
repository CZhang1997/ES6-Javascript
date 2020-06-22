// loop through each element

var colors = ["red", "blue", "green"];

console.log("for loop: ");
for (var i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
}

console.log("\nforEach: ");
colors.forEach((color) => {
  //   console.log(color);
});

// create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6];
// create a variable to hold the sum
var sum = 0;
var sum2 = 0;

function adder(number) {
  sum2 += number;
}
// loop over the array
numbers.forEach((number) => {
  sum += number;
});
numbers.forEach(adder);
// print the sum
console.log(sum);
console.log(sum2);
