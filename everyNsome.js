// every check if every object'd condition match then return true
// some
//
var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

allComputersCanRunProgram = computers.every((computer) => {
  return computer.ram > 16;
});
onlySomeComputersCanRunProgram = computers.some((computer) => {
  return computer.ram > 16;
});
console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

var names = ["Alexandria", "Mattew", "Joe"];

names.every((name) => {
  return name.length > 4;
});

function Field(value) {
  this.value = value;
}
Field.prototype.validate = function () {
  return this.value.length > 0;
};
var username = new Field("2Cool");
var password = new Field("pass");
var birthdate = new Field("123");

// console.log(username.value.length);
var fields = [username, password, birthdate];
var formIsValid = fields.every((field) => {
  return field.validate();
});

if (formIsValid) {
  console.log("ready for submits");
}
