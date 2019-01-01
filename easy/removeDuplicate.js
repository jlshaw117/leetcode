var removeDuplicates = function (nums) {
    for (let idx = 0; idx < nums.length; idx++) {
        if(nums[idx] === nums[idx + 1]) {
            nums.splice(idx + 1, 1);
            idx -= 1;
        }
    }
};