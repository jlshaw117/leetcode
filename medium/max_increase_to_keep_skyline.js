const maxIncreaseKeepingSkyline = (grid) => {

    let sum = 0;
    let maxCol = [];

    for (let col = 0; col < grid.length; col++) {
        let newCol = [];
        for (let row = 0; row < grid.length; row++) {
            newCol.push(grid[row][col]);
        }
        maxCol.push(Math.max(...newCol));
    }

    for (let row = 0; row < grid.length; row++) {
        let maxRow = Math.max(...grid[row]);
        for (let col = 0; col < grid.length; col++) {
            sum += (Math.min(maxRow, maxCol[col]) - grid[row][col]); 
        }
    }

    return sum;
};