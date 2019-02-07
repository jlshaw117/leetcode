const floodIsland = (grid, i, j) => {
    if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === '1') {
        grid[i][j] = '0';
        floodIsland(grid, i, j + 1);
        floodIsland(grid, i, j - 1);
        floodIsland(grid, i + 1, j);
        floodIsland(grid, i - 1, j);
    }
};

const numIslands = (grid) => {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                result ++;
                floodIsland(grid, i, j);
            }
        }
    }
    return result;
};
