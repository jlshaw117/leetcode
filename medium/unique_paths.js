const uniquePaths = (m,n) => {
    let pascels = new Array(m).fill().map(() => new Array(n));
    let lastx = m - 1;
    let lasty = n - 1;
    for (let x = lastx; x >= 0; x--) {
        for (let y = lasty; y >= 0; y--) {
            if (x === lastx) {
                pascels[x][y] = 1;
                continue;
            }
            if (y === lasty) {
                pascels[x][y] = 1;
                continue;
            }
            pascels[x][y] = pascels[x+1][y] + pascels[x][y+1];
        }
    }
    return pascels[0][0];
};