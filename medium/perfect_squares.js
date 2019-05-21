const numSquares = (n) => {
    if (n < 4) return n;
    let squares = [];
    for (let i = 1; (i ** 2) <= n; i++) {
        squares.push(i ** 2);
    }

    let memo = {0:0, 1:1, 2:2, 3:3};

    for (let i = 4; i <= n; i++) {
        let possibles = [];
        for (let square of squares) {
            if (square > i) break;
            let diff = i - square;
            possibles.push(memo[diff] + 1);
        }
        memo[i] = Math.min(...possibles);
    }
    return memo[n];
};

console.log(numSquares(13));