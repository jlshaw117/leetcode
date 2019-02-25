//  Brute Force

const totalFruit = (trees) => {
    let count = 0;
    let baskets = new Set();

    for (let i = 0; i < trees.length; i++) {
        let newCount = 0;
        for (let j = i + 1; j < trees.length; j++) {
            if (baskets.length === 2 && !baskets.has(trees[j])) {
                // if (newCount > count) count = newCount;
                // baskets = new Set();
                break;
            }
            baskets.add(trees[j]);
            count ++;
        }
        if (newCount > count) count = newCount;
        baskets = new Set();
    }
    return count;
};