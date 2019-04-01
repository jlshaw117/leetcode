const maxDepth = (head) => {
    let result = 0;
    const rec = (root, depth) => {
        if (!root) {
            if (depth > result) result = depth;
            return;
        }
        if (!root.children.length) {
            depth++;
            if (depth > result) result = depth;
            return;
        }
        for (let i = 0; i < root.children.length; i++) {
            rec(root.children[i], depth + 1);
        }

    };
    rec(head, 0);
    return result;
};