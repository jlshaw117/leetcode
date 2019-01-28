const threeSum = (nums) => {
    let ans = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let x = j + 1; x < nums.length; x++) {
                if (nums[i] + nums[j] + nums[x] === 0) ans.add([nums[i], nums[j], nums[x]].sort((a,b) => a - b));
            }
        }
    }
    return ans;
};