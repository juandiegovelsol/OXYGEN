// 68476c6f94d0a7a77fbe7fb8

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function navRec(root, y, res) {
  if (root === null) return;

  if (res.length <= y) {
    res.push([]);
  }

  res[y].push(root.data);

  navRec(root.left, y + 1, res);
  navRec(root.right, y + 1, res);
}

function nav(root) {
  const res = [];

  navRec(root, 0, res);
  return res;
}

const root = new Node(5);
root.left = new Node(12);
root.right = new Node(13);
root.left.right = new Node(14);
root.left.left = new Node(7);
root.right.right = new Node(2);
root.left.left.left = new Node(17);
root.right.right.left = new Node(8);
root.right.right.right = new Node(11);
root.left.left.right = new Node(23);
root.left.right.right = new Node(3);
root.left.right.left = new Node(27);

const res = nav(root);
console.log(res);

for (const n of res) {
  process.stdout.write("[");
  for (let i = 0; i < n.length; i++) {
    process.stdout.write(n[i].toString());
    if (i < n.length - 1) process.stdout.write(", ");
  }
  process.stdout.write("] ");
}
