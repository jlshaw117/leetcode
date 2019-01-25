// Brute Force

// const maxArea = (heights) => {
//     let ans = 0;

//     for (let i = 0; i < heights.length; i++) {
//         for (let j = i + 1; j < heights.length; j++) {
//             let area = Math.min(heights[i], heights[j]) * (j - i);
//             ans = area > ans ? area : ans;
//         }
//     }

//     return ans;
};

// Optimized

const maxArea = (heights) => {
    let ans = 0;
    let startIdx = 0;
    let endIdx = heights.length - 1;

    while (endIdx > startIdx) {
        let area = Math.min(heights[startIdx], heights[endIdx]) * (endIdx - startIdx);
        ans = area > ans ? area : ans;
        if (heights[endIdx] < heights[startIdx]) {
            endIdx--;
        } else {
            startIdx++;
        }
    }
    return ans;
};
