const medianTwoSortedArrays = (nums1, nums2) => {
    let allNums = merge(nums1, nums2);
    let mid = Math.floor(allNums.length / 2);

    if (allNums.length % 2 === 0) {
        return ((allNums[mid - 1] + allNums[mid]) / 2);
    } else {
        return allNums[mid];
    }
};

const merge = (nums1, nums2) => {
    let ans = [];
    while (true) {
        if (nums1.length === 0 || nums2.length === 0) {
            break
        }
        if (nums1[0] < nums2[0]) {
            ans.push(nums1.shift());
        } else {
            ans.push(nums2.shift());
        }
    }
    return ans.concat(nums1, nums2);
};