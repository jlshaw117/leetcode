const mergeTrees = (tree1, tree2) => {
    if (!tree1) return tree2;
    if (!tree2) return tree1;
    let newNode = new TreeNode(tree1.val + tree2.val);

    newNode.left = mergeTrees(tree1.left, tree2.left);
    newNode.right = mergeTrees(tree1.right, tree2.right);
    
    return newNode;
};