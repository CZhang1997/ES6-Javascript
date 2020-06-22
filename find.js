// find -> stop when find the first object met the condition

var users = [
  { name: "Jill" },
  { name: "Alex", id: 4 },
  { name: "Bill" },
  { name: "Alex", id: 5 },
];

var alex = users.find((user) => {
  return user.name === "Alex";
});
console.log(alex);

function Car(model) {
  this.model = model;
}

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

var focus = cars.find((car) => {
  return car.model === "Focus";
});
console.log(focus);

var posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
  { id: 3, title: "New Post" },
];
var comment = { postId: 1, content: "Great Post" };

function postForComment(posts, comment) {
  return posts.find((post) => {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));
