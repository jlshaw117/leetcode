const trap = (heights) => {
    let max = 0;
    let maxHeightLeft = heights.map((el) => {
        if (el > max){
            max = el;
        }
        return max;
    });
    let maxHeightRight = [];
    max = 0;
    for (let idx = heights.length - 1; idx >= 0; idx--) {
        if (heights[idx] > max) max = heights[idx];
        maxHeightRight.unshift(max);
    }
    let result = 0;
    for (let idx = 0; idx < heights.length; idx++) {
        result += Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - heights[idx];
    }
    return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));