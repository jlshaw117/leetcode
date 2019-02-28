// Brute Force

// const maxProfit = (prices) => {
//     let max = 0;
//     for (let buy = 0; buy < prices.length; buy++) {
//         for (let sell = buy + 1; sell < prices.length; sell++) {
//             let profit = prices[sell] - prices[buy];
//             max = Math.max(max, profit);
//         }
//     }
//     return max;
// };

// optimized

const maxProfit = (prices) => {
    let minBuy = prices[0];
    let max = 0;

    for(let day = 1; day < prices.length; day++) {
        max = Math.max(max, prices[day] - minBuy);
        minBuy = Math.min(minBuy, prices[day]);
    }

    return max;
};