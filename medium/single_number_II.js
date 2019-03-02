const singleNumber = (nums) => {
    let set = new Set(nums);

    let sum = 0;
    set.forEach(num => sum += num);

    return ((3 * sum) - nums.reduce((agg, num) => agg + num)) / 2;
};