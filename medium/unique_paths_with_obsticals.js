const uniquePathsWithObstacles = (grid) => {
    let rows = grid.length;
    let cols = grid[0].length;
    let pathsGrid = new Array(rows).fill().map(() => new Array(cols).fill(0));
    pathsGrid[rows - 1][cols - 1] = 1;
    for (let x = rows - 1; x >= 0; x--) {
        for (let y = cols - 1; y >= 0; y--) {
            if (grid[x][y] === 1) {
                pathsGrid[x][y] = 0;
                continue;
            }
            if (x === rows - 1 && y === cols - 1) continue;
            let right = y === cols - 1 ? 0 : pathsGrid[x][y + 1];
            let down = x === rows - 1 ? 0 : pathsGrid[x + 1][y];
            pathsGrid[x][y] = right + down;
        }
    }
    return pathsGrid[0][0];
};