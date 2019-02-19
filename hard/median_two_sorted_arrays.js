// Brute Force
// const medianTwoSortedArrays = (nums1, nums2) => {
//     let allNums = merge(nums1, nums2);
//     let mid = Math.floor(allNums.length / 2);

//     if (allNums.length % 2 === 0) {
//         return ((allNums[mid - 1] + allNums[mid]) / 2);
//     } else {
//         return allNums[mid];
//     }
// };

// const merge = (nums1, nums2) => {
//     let ans = [];
//     while (true) {
//         if (nums1.length === 0 || nums2.length === 0) {
//             break
//         }
//         if (nums1[0] < nums2[0]) {
//             ans.push(nums1.shift());
//         } else {
//             ans.push(nums2.shift());
//         }
//     }
//     return ans.concat(nums1, nums2);
// };

const partition = (nums1, nums2, len) => {
    let i = Math.floor(nums1.length / 2);
    let j = Math.floor((len + 1) / 2) - i;

    if (nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]) return i;
    if (nums1[i - 1] > nums2[j]) {
        // first half
        return partition(nums1.slice(0, i), nums2, len);
    } else {
        // second half
        return partition(nums1.slice(i + 1), nums2, len) + i + 1;
    }
    // [0,1,2,3,5]  3,5
    // [3,4,5,6,7]  3,4,5
};

const medianTwoSortedArrays = (nums1, nums2) => {
    // two partitions of equal size
    // all nums in left are less than all nums in right

    let short;
    let long;
    if (nums1.length < nums2.length) {
        short = nums1;
        long = nums2;
    } else {
        short = nums2;
        long = nums1;
    }

    let i = Math.floor(short.length / 2);
    let j = Math.floor((short.length + long.length + 1) / 2) - i;


};

console.log(partition([0, 1, 2, 3, 5], [3, 4, 5, 6, 7], 10));

// [0,1,2,3,5]
// [3,4,5,6,7]