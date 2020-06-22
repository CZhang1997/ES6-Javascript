var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "celery", type: "vegetable", quantity: 10, price: 9 },
  { name: "banana", type: "fruit", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 },
];

const fruits = products.filter((product) => {
  return product.type === "fruit";
});

// console.log(fruits);

// type vegetatble quantity is greater than 0 price less than 10

const filterd = products.filter((product) => {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});
console.log(filterd);

var post = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awesome Post" },
  { postId: 3, content: "it is okay" },
  { postId: 4, content: "neat" },
];

commentsForPost = (post, comments) => {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
};

const po = commentsForPost(post, comments);
console.log(po);
