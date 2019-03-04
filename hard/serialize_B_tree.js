function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const serialize = (root) => {
    let ans = [];

    const rec = (node) => {
        if (!node) {
            ans.push('N');
            return;
        }
        ans.push(node.val);
        rec(node.left);
        rec(node.right);
    };
    rec(root);
    return ans.join();
};

const deserialize = (str) => {
    
    let arr = str.split(',');

    let idx = -1;
    const rec = () => {
        idx += 1;
        if (arr[idx] === 'N') {
            return null;
        }

        let currNode = new TreeNode(arr[idx]);
        currNode.left = rec();
        currNode.right = rec();

        return currNode;
    };

    return rec();
};