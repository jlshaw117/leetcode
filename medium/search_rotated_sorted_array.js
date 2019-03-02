/* 
- Binary Search
- if start < mid //left side sorted
    - if target < mid and >= start
        - target is in left side
    - else
        - target is in right side
- else // right side is sorted
    - if target > mid and <= end
        - target is in the right
    else
        - target is in the left
*/

// Recursive

// const search = (nums, target) => {
//     if (nums.length < 1) return -1;
//     let mid = Math.floor(nums.length / 2);
//     let end = nums.length - 1;
//     if (nums[mid] === target) return mid;

//     if (nums[0] < nums[mid]) {
//         if (target < nums[mid] && target >= nums[0]) {
//             return search(nums.slice(0, mid));
//         } else {
//             let ans = search(nums.slice(mid+1));
//             return ans < 0 ? ans : ans + mid + 1;
//         }
//     } else {
//         if (target > nums[mid] && target <= nums[end]) {
//             let ans = search(nums.slice(mid + 1));
//             return ans < 0 ? ans : ans + mid + 1;
//         } else {
//             return search(nums.slice(0, mid));
//         }
//     }
// };

// Itterative

const search = (nums, target) => {
    if (nums.length === 0) return -1;
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;

        if (nums[start] < nums[mid]) {
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return target === nums[start] ? start : -1;
};