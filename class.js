// // es 5
// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.drive = () => {
//   return "vroom";
// };

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = () => {
//   return "beep";
// };

// const toyota = new Toyota({ color: "red", title: "camery" });
// console.log(toyota);
// console.log(toyota.drive());
// console.log(toyota.honk());

// ES 6
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    const { color } = options;
    this.color = color;
  }
  honk() {
    return "beep";
  }
}
// const car = new Car({ title: "Toyota" });
// console.log(car.drive());
// console.log(car);

const toyota = new Toyota({ title: "Toyota", color: "red" });
console.log(toyota.honk());
console.log(toyota);
