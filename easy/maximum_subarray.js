// Brute Force O(n^2)

const maxSubArray = (nums) => {

    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let newSum = 0;
        for (let j = i; j < nums.length; j++) {
            newSum += nums[j];
            max = newSum > maxSum ? newSum : maxSum;
        }
    }
    return maxSum;
};