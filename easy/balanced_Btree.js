function height(root) {
    if (!root) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
}
function isBalanced(root) {
    if (!root) return true;
    let heightDiff = Math.abs(height(root.left) - height(root.right)) <= 1;
    return (heightDiff && isBalanced(root.left) && isBalanced(root.right));
}