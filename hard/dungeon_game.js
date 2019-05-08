// const calculateMinimumHP = (dungeon, x = 0, y = 0, min = -1, curr = -1) => {
//     if (x >= dungeon.length - 1 && y >= dungeon[0].length - 1) {
//         curr += dungeon[x][y];
//         min = Math.min(curr, min);
//         return Math.abs(min);
//     }
//     let right = Infinity;
//     let down = Infinity;
//     curr += dungeon[x][y];
//     min = Math.min(curr, min);
//     if (y < dungeon[0].length - 1) {
//         right = calculateMinimumHP(dungeon, x, y + 1, min, curr);
//     }
//     if (x < dungeon.length - 1) {
//         down = calculateMinimumHP(dungeon, x + 1, y, min, curr);
//     }
//     return Math.min(right, down);
// };

// Memoized
// const calculateMinimumHP = (dungeon, x=0, y=0, memo={}) => {
//     let key = `${x}, ${y}`;
//     if (key in memo) return memo[key];
//     if (x >= dungeon.length - 1 && y >= dungeon[0].length - 1) {
//         let reqHealth = dungeon[x][y] >= 0 ? 1 : Math.abs(dungeon[x][y]) + 1;
//         memo[key] = reqHealth;
//         return memo[key];
//     }
//     let right = y < dungeon[0].length - 1 ? calculateMinimumHP(dungeon, x, y + 1, memo) : Infinity;
//     let down = x < dungeon.length - 1 ? calculateMinimumHP(dungeon, x + 1, y, memo) : Infinity;
//     let reqHealth = Math.min(right, down) - dungeon[x][y];
//     memo[key] = reqHealth <= 0 ? 1 : reqHealth;
//     return memo[key];
// };
// Optimized
const calculateMinimumHP = (dungeon) => {
    lastx = dungeon.length - 1;
    lasty = dungeon[0].length - 1;
    lastVal = dungeon[lastx][lasty];
    dungeon[lastx][lasty] = lastVal >= 0 ? 1 : Math.abs(dungeon[lastx][lasty]) + 1;
    for (let x = dungeon.length - 1; x >= 0; x--) {
        for (let y = dungeon[0].length - 1; y >= 0; y--) {
            if (x === lastx && y === lasty) continue;
            let right = y >= lasty ? Infinity : dungeon[x][y + 1];
            let down = x >= lastx ? Infinity : dungeon[x + 1][y];
            let remHealth = Math.min(right, down);
            remHealth -= dungeon[x][y];
            remHealth = remHealth <= 0 ? 1 : remHealth;
            dungeon[x][y] = remHealth;
        }
    }
    return dungeon[0][0];
};

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]));