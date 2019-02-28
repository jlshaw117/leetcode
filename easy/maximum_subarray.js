// Brute Force O(n^2)

// const maxSubArray = (nums) => {

//     let maxSum = nums[0];

//     for (let i = 0; i < nums.length; i++) {
//         let newSum = 0;
//         for (let j = i; j < nums.length; j++) {
//             newSum += nums[j];
//             maxSum = newSum > maxSum ? newSum : maxSum;
//         }
//     }
//     return maxSum;
// };

// Optimized O(n)

const maxSubArray = (nums) => {

    let maxSum = nums[0];
    let currSum = 0;

    nums.forEach(num => {
        currSum += num;
        if (currSum > maxSum) maxSum = currSum;
        if (currSum < 0) currSum = 0;
    });

    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));