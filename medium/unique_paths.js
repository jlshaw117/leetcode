// const uniquePaths = (m,n) => {
//     let pascels = new Array(m).fill().map(() => new Array(n));
//     let lastx = m - 1;
//     let lasty = n - 1;
//     for (let x = lastx; x >= 0; x--) {
//         for (let y = lasty; y >= 0; y--) {
//             if (x === lastx) {
//                 pascels[x][y] = 1;
//                 continue;
//             }
//             if (y === lasty) {
//                 pascels[x][y] = 1;
//                 continue;
//             }
//             pascels[x][y] = pascels[x+1][y] + pascels[x][y+1];
//         }
//     }
//     return pascels[0][0];
// };

const uniquePaths = (m, n) => {
    let k = n - 1;
    n = m + (n - 2);
    let facts = { 0: 1 };

    const factorial = (x) => {
        if (x <= 1) {
            facts[x] = 1;
            return 1;
        }
        facts[x] = x * factorial(x - 1);
        return facts[x];
    };
    factorial(Math.max(k, n));
    return (facts[n] / (facts[k] * facts[n - k]));
};

console.log(uniquePaths(3,5));