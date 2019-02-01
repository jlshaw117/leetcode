const permute = (nums) => {
    if (nums.length <= 1) return [nums];

    let prePerm = permute(nums.slice(0, nums.length - 1));
    let currNum = nums[nums.length - 1];

    let ans = [];
    prePerm.forEach(set => {
        for (let idx = 0; idx <= set.length; idx++) {
            let newSet = set.slice(0);
            newSet.splice(idx, 0, currNum);
            ans.push(newSet);
        }
    });
    return ans;
};

console.log(permute([1,2,3,4]));