const coinChange = (coins, amount) => {
    let memo = {0: 0};
    for (let i = 1; i <= amount; i++) {
        let possibilities = [];
        for (let coin of coins) {
            let diff = i - coin;
            if (diff < 0) continue;
            if (memo[diff] >= 0) possibilities.push(memo[diff] + 1);
        }
        if (possibilities.length) {
            memo[i] = Math.min(...possibilities);
        } else {
            memo[i] = -1;
        }
    }
    return memo[amount];
};

console.log(coinChange([5], 11));