const removeElement = (nums, val) => {
    let len = nums.length;

    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] === val) {
            nums.splice(idx, 1);
            idx --; 
        }
    }
    return nums.lenght;
};