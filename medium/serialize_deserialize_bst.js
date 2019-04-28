function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const maxVal = root => {
    if (!root) return null;
    if (root.right) {
        return maxVal(root.right);
    } else {
        return root.val;
    }
};

const serialize = (root) => {
    if (!root) return '';
    let result = [];

    const rec = (node) => {
        if (!node) return;

        result.push(node.val);

        rec(node.left);
        rec(node.right);
    };

    rec(root);
    return result.join('|');
};

const deserialize = (str) => {
    if (str === '') return null;

    let arr = str.split('|').map(num => parseInt(num));

    let root = new TreeNode(arr.shift());

    while (arr.length) {
        let curr = root;
        let val = arr.shift();
        let node = new TreeNode(val);

        while (true) {
            if (val < curr.val) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = node;
                    break;
                }
            } else {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = node;
                    break;
                }
            }
        }

    }

    return root;
};

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);

node1.right = node2;

console.log(deserialize(serialize(node1)));