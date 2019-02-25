//  Brute Force

// const totalFruit = (trees) => {
//     let count = 0;
//     let baskets = new Set();

//     for (let i = 0; i < trees.length; i++) {
//         let newCount = 0;
//         for (let j = i; j < trees.length; j++) {
//             if (baskets.size === 2 && !baskets.has(trees[j])) {
//                 // if (newCount > count) count = newCount;
//                 // baskets = new Set();
//                 break;
//             }
//             baskets.add(trees[j]);
//             newCount ++;
//         }
//         if (newCount > count) count = newCount;
//         baskets = new Set();
//     }
//     return count;
// };

// Optimized

const totalFruit = (trees) => {
    let queue = [];
    let map = new Map();

    for (let idx = 0; idx < trees.length; idx++) {
        let el = trees[idx];
        queue.push(el);
        if (map.has(el)) {
            map.set(el, map.get(el) + 1);
        } else {
            map.set(el, 1);
        }
        if (map.size > 2) {
            el = queue.shift();
            map.set(el, map.get(el) - 1);
            if (map.get(el) === 0) {
                map.delete(el);
            }
        }
    }
    return queue.length;
};

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));