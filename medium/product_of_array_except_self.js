const productExceptSelf = (nums) => {
    let result = [];

    let lowerProduct = 1;
    for (let idx = 0; idx < nums.length; idx++) {
        result.push(lowerProduct * 1);
        lowerProduct *= nums[idx];
    }

    let upperProduct = 1;
    for (let idx = nums.length -1; idx >= 0; idx--) {
        result[idx] = result[idx] * upperProduct;
        upperProduct *= nums[idx];
    }

    return result;
};