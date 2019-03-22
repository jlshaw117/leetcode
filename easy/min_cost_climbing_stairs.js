// Backtracking O(2^n)
// const minCostClimbingStairs = (costs) => {
//     let minCost;

//     const rec = (cost, idx) => {
//         if (minCost !== undefined && cost > minCost) return;
//         if (idx >= costs.length) {
//             minCost = cost;
//             return;
//         }
//         rec(cost + costs[idx], idx + 1);
//         rec(cost + costs[idx], idx + 2);
//     };

//     rec(0, 0)
//     rec(0, 1);

//     return minCost;
// };

const minCostClimbingStairs = (costs) => {
    let minCosts = {};

    for (let i = costs.length - 1; i >= 0; i--) {
        if (i >= costs.length - 2) {
            minCosts[i] = costs[i];
        } else {
            minCosts[i] = costs[i] + Math.min(minCosts[i+1], minCosts[i+2]);
        }
    }
    return Math.min(minCosts[0], minCosts[1]);
};