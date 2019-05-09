const outOfRange = (grid, x, y) => {
    let maxX = grid.length - 1;
    let maxY = grid[0].length - 1;
    return !(x <= maxX && x >= 0 && y <= maxY && y >= 0);
};

const uniquePathsIII = (grid) => {
    let totalSpots = 0;
    let startX, startY;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            if (grid[x][y] === 1) [startX, startY] = [x,y];
            if (grid[x][y] !== -1) totalSpots++;
        }
    }

    let count = 0;
    const rec = (x,y, visited=new Set()) => {
        let cloneVisited = new Set(visited);
        let spot = `${x}, ${y}`;
        if (outOfRange(grid, x, y) || visited.has(spot) || grid[x][y] === -1) return;
        if (grid[x][y] === 2) {
            cloneVisited.add(spot);
            if (cloneVisited.size === totalSpots) count++;
            return;
        }
        cloneVisited.add(spot);
        rec(x+1, y, cloneVisited);
        rec(x-1, y, cloneVisited);
        rec(x, y+1, cloneVisited);
        rec(x, y-1, cloneVisited);
    };
    rec(startX,startY);
    return count;
};

console.log(uniquePathsIII([[0,1], [2,0]]));