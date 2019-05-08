const calculateMinimumHP = (dungeon, x = 0, y = 0, min = -1, curr = -1, memo={}) => {
    let key = `${x}, ${y}`;
    if (key in memo) return memo[key];
    if (x >= dungeon.length - 1 && y >= dungeon[0].length - 1) {
        curr += dungeon[x][y];
        min = Math.min(curr, min);
        memo[key] = Math.abs(min);
        return Math.abs(min);
    }
    let right = Infinity;
    let down = Infinity;
    curr += dungeon[x][y];
    min = Math.min(curr, min);
    if (y < dungeon[0].length - 1) {
        right = calculateMinimumHP(dungeon, x, y + 1, min, curr, memo);
    }
    if (x < dungeon.length - 1) {
        down = calculateMinimumHP(dungeon, x + 1, y, min, curr, memo);
    }
    memo[key] = Math.min(right, down);
    return memo[key];
};