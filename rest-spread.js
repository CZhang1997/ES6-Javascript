function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers([1, 2, 3, 4, 5]));

// spread operator -> ...

const defaultColors = ["red", "green"];
const favoriteColors = ["orange", "yellow"];

const colors = [...defaultColors, ...favoriteColors];
console.log(colors);

function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

// rest operator

const MathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use the multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(MathLibrary.calculateProduct(1, 2, 4));
