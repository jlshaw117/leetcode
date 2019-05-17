var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) return null;
    let rootVal = postorder.pop();
    let root = new TreeNode(rootVal);
    let rootIndex = inorder.indexOf(rootVal);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex + 1);
    let leftPostorder = postorder.slice(0, leftInorder.length);
    let rightPostorder = postorder.slice(leftInorder.length);
    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
};