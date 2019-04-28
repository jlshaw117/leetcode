const preorder = (root) => {
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