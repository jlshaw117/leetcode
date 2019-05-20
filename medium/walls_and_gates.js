const wallsAndGates = (rooms) => {
    if (rooms.length === 0) return [];
    let queue = [];
    let m = rooms.length;
    let n = rooms[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) queue.push([i,j]);
        }
    }

    const Dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    while (queue.length) {
        let [currRow, currCol] = queue.shift();
        let dist = rooms[currRow][currCol];
        for (let dir of Dirs) {
            let newRow = currRow + dir[0];
            let newCol = currCol + dir[1];
            if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) continue;
            if (rooms[newRow][newCol] === 2147483647) {
                rooms[newRow][newCol] = dist + 1;
                queue.push([newRow, newCol]);
            }
        }
    }
};