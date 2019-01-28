const threeSum = (nums) => {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let x = j + 1; x < nums.length; x++) {
                if (nums[i] + nums[j] + nums[x] === 0) ans.push([nums[i], nums[j], nums[x]]);
            }
        }
    }
    return ans;
};