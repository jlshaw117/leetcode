const isMagicSquare = (startRow, startCol, grid) => {
    let nums = new Set();
    let sum = grid[startRow][startCol] + grid[startRow][startCol + 1] + grid[startRow][startCol + 2];

    for (let row = startRow; row < startRow + 3; row++) {
        let newSum = 0;
        for (let col = startCol; col < startCol + 3; col++) {
            let num = grid[row][col];
            if (num > 9 || num < 1 || nums.has(num)) return false;
            nums.add(num);
            newSum += num;
        }
        if (newSum !== sum) return false;
    }
    if (nums.size != 9) return false;

    for (let col = startCol; col < startCol + 3; col++) {
        let newSum = 0;
        for (let row = startRow; row < startRow + 3; row++) {
            let num = grid[row][col];
            newSum += num;
        }
        if (newSum !== sum) return false;
    }
    let diag1 = grid[startRow][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow + 2][startCol + 2];
    let diag2 = grid[startRow + 2][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow][startCol + 2];
    if (diag1 !== diag2 && diag1 !== sum) return false;
    return true;
};

const numMagicSquaresInside = (grid) => {
    let count = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 2; j++) {
            if (isMagicSquare(i, j, grid)) count++;
        }
    }
    return count;
};