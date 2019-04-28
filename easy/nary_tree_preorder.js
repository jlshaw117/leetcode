const recPreorder = (root) => {
    let ans = [];

    const rec = (curr) => {
        if (!curr) return;

        ans.push(curr.val);
        for (let i = 0; i < curr.children.length; i++) {
            rec(curr.children[i]);
        }
    };

    rec(root);
    return ans;
};

const preorder = (root) => {
    if (!root) return [];
    let ans = [];
    let stack = [root];

    while (stack.length) {
        let curr = stack.pop();
        ans.push(curr.val);
        if (curr.children) {
            for (let i = curr.children.length -1; i >= 0; i--) {
                stack.push(curr.children[i]);
            }
        }

    }
    return ans;
};