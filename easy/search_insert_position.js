const searchInsert = (nums, target) => {
    if (nums.length === 0) return 0;

    let mid = Math.floor(nums.length / 2);

    if (nums[mid] === target) {
        return mid;
    } else if (target < nums[mid]) {
        return searchInsert(nums.slice(0, mid), target);
    } else {
        return searchInsert(nums.slice(mid + 1), target) + mid + 1;
    }
};