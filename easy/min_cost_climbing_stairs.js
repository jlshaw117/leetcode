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