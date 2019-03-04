const repeatedNTimes = (nums) => {
    let seen = new Set();

    for (let idx = 0; idx < nums.length; idx++) {
        if (seen.has(nums[idx])) return nums[idx];
        seen.add(nums[idx]);
    }
};