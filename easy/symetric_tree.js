class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const isSymmetric = (root) => {
    if (!root) return true;
    let queue = [root];
    let level = -1;
    let levels = [];
    while (queue.length) {
        let size = queue.length;
        level++;
        levels.push([]);
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node) {
                levels[level].push(node.val);
                queue.push(node.left, node.right);
            } else {
                levels[level].push('N');
            }
        }
    }
    for (let level of levels) {
        let reversed = level.slice().reverse();
        for (let i = 0; i < reversed.length; i++) {
            if (reversed[i] !== level[i]) return false;
        }
    }
    return true;
};

let root = new Node(1);
let node1 = new Node(2);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(3);

root.left = node1;
root.right = node2;
node1.right = node3;
node2.right = node4;

console.log(isSymmetric(root));
