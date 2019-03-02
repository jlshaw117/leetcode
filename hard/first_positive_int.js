const firstMissingPositive = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        if (Number.isInteger(nums[i])) {
            let j = nums[i] - 1;
            while (Number.isInteger(nums[j])) {
                let num = nums[j];
                nums[j] = false;
                j = num - 1;
            }
        }
    }

    for (let idx = 0; idx < nums.length; idx++) {
        if (Number.isInteger(nums[idx])) return idx + 1;
    }

    return nums.length + 1;
};