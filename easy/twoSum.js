// Brute force solution
// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i,j];
//         }        
//     }
//     return null;
// };

// Optimized Solution

const twoSum = function (nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }

    for (let idx = 0; idx < nums.length; idx++) {
        let curr = nums[idx];
        let ans = target - curr;

        if (curr === ans && hash[ans] !== idx) return [idx, hash[ans]];

        if (hash[ans] !== undefined && hash[ans] !== idx) return [hash[curr], hash[ans]];
    }
    return null;
};