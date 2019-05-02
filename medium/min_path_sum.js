function minPathSum(grid) {
    let table = new Array(grid.length)

    for (let i = 0; i < table.length; i++) {
        table[i] = new Array(grid[0].length).fill(0);
    }

    table[0][0] = grid[0][0];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (row === 0 && col === 0) continue;
            if (row === 0) {
                table[row][col] = grid[row][col] + table[row][col - 1];
            } else if (col === 0) {
                table[row][col] = grid[row][col] + table[row - 1][col];
            } else {
                let north = table[row - 1][col];
                let west = table[row][col - 1];
                table[row][col] = Math.min(north, west) + grid[row][col];
            }

        }
    }

    return table[table.length - 1][table[0].length - 1];
}