class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("great comment", []),
  new Comment("bad comment", []),
  new Comment("good comment", []),
];

const root = new Comment("Great Post!", children);

for (let comment of root) {
  console.log(comment);
}
