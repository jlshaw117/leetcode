const levelOrder = (root, levels=[], level=0) => {
    if (!root) return levels;
    if (levels[level]) {
        levels[level].push(root.val);
    } else {
        levels[level] = [root.val];
    }
    for (child of root.children) {
        levelOrder(child, levels, level + 1);
    }
    return levels;
};