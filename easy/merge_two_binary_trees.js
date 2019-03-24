// const mergeTrees = (tree1, tree2) => {
//     if (!tree1) return tree2;
//     if (!tree2) return tree1;
//     let newNode = new TreeNode(tree1.val + tree2.val);

//     newNode.left = mergeTrees(tree1.left, tree2.left);
//     newNode.right = mergeTrees(tree1.right, tree2.right);
    
//     return newNode;
// };
// Slight Optimization for space
const mergeTrees = (tree1, tree2) => {
    if (!tree1) return tree2;
    if (!tree2) return tree1;
    tree1.val = tree1.val + tree2.val;

    tree1.left = mergeTrees(tree1.left, tree2.left);
    tree1.right = mergeTrees(tree1.right, tree2.right);

    return tree1;
};