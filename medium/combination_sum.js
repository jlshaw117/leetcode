const combinationSum = (nums, target) => {
    if (target === 0) return [];
    if (nums.length === 0) return [];

    let result = [];

    const rec = (currentResult, newTarget, idx) => {
        if (newTarget === 0) {
            result.push(currentResult.slice());
            return;
        } else {
            for (;idx < nums.length; idx++) {
                if (nums[idx] <= newTarget) {
                    currentResult.push(nums[idx]);
                    newTarget -= nums[idx];
                    rec(currentResult, newTarget, idx);
                    newTarget += currentResult.pop();
                }
            }
        }
    };
    rec([], target, 0);
    return result;
};

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,6,7], 7)[1]);