var numbers = [10, 20, 30];

var sum = 0;

//            function (previous state, next element)
sum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
// initial value
console.log(sum);

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

const colors = primaryColors.reduce((colors, color) => {
  colors.push(color.color);
  return colors;
}, []);

console.log(colors);

balanceParens = (string) => {
  return (
    string.split("").reduce((previous, char) => {
      if (previous < 0) {
        return previous;
      }
      if (char === "(") {
        return ++previous;
      }
      if (char === ")") {
        return --previous;
      }
      return previous;
    }, 0) === 0
  );
};

console.log(balanceParens("(()))("));
