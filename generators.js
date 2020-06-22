// const colors = ["red", "yellow", "blue"];

// for (let color of colors) {
//   console.log(color);
// }

// generator function, run and stop and come back

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield "cash";

  const stuffFromLaundry = yield "laundry";
  // walking back home
  return [stuffFromStore, stuffFromLaundry];
}

// const gen = shopping();
// console.log(gen.next());
// console.log(gen.next("groceries"));
// console.log(gen.next("clean cloths"));

function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}
// const gen = colors();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
console.log(myColors);

const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
};
// function* TestingTeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
// }
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  //   const testingTeamIterator = TestingTeamIterator(team.testingTeam);
  //   yield* testingTeamIterator;
  yield* team.testingTeam;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);
