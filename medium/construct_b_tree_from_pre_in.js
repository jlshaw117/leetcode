function buildTree(preorder, inorder) {
    if (!inorder.length) return null;
    let rootVal = preorder.shift();
    let rootNode = new TreeNode(rootVal);
    let i = inorder.indexOf(rootVal);
    let leftTree = inorder.slice(0, i);
    let rightTree = inorder.slice(i + 1);
    rootNode.left = buildTree(preorder, leftTree);
    rootNode.right = buildTree(preorder, rightTree);
    return rootNode;
}