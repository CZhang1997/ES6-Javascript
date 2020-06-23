// 3 states pending, resolve, or reject
let promise = new Promise((resolve, reject) => {
  resolve();
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000);
});

promise
  .then(() => {
    console.log("resolve and finish");
  })
  .then(() => {
    console.log("also run");
  })
  .catch(() => {
    console.log("error");
  });

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  //   .then(response.json())
  .then((data) => {
    console.log(data);
  });
