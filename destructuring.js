var expense = {
  type: "Business",
  amount: "$45 USD",
};

const { type, amount } = expense;

console.log(type);

var savedFiles = {
  extension: ".jpg",
  name: "repost",
  size: 14040,
};

function fileSummary({ name, extension, size }) {
  //   const { name, extension, size } = file;
  return `The file ${name}${extension} is of size ${size}`;
}
console.log(fileSummary(savedFiles));

// destructuring array

const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Mountain View" },
  { name: "Uber", location: "Mountain View" },
];

// get the second element from the array
const [{ name }] = companies;
console.log(name);

// const [first, ...rest] = companies;
// console.log(rest);

function signup({ username, password, email, dateOfBirth, city }) {
  // create user
}
const user = {
  username: "myname",
  password: "password",
  email: "myemail@example.com",
  dateOfBirth: "1/1/1999",
  city: "plano",
};
signup(user);

const points = [
  [4, 5],
  [10, 1],
  [5, 53],
];

const pairs = points.map(([x, y]) => {
  //   const [x, y] = pair;
  return { x, y };
});
console.log(pairs);
