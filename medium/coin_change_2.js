const change = (amount, coins, memo = {}) => {
    let key = amount + '-' + coins;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    let coin = coins[0];
    let count = 0;
    for (let numCoins = 0; coin * numCoins <= amount; numCoins++) {
        count += change(amount - (coin * numCoins), coins.slice(1), memo);
    }

    memo[key] = count;
    return memo[key];
};

console.log(change(5, [1,2,5]));