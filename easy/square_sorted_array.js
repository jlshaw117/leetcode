// const sortedSquares = (nums) => {
//     let squares = [];

//     nums.forEach(num => squares.push(num * num));

//     return squares.sort((a,b) => a - b);
// };

const sortedSquares = (nums) => {
    let positive = nums.length;
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] >= 0) {
            positive = idx;
            break;
        }
    }
    let negative = positive - 1;
    let squares = [];
    while (negative >= 0 || positive < nums.length) {
        let positiveNum = nums[positive];
        let negativeNum = Math.abs(nums[negative]);
        if (positiveNum >= 0 && negativeNum) {
            if (positiveNum < negativeNum) {
                squares.push(positiveNum);
                positive++;
            } else {
                squares.push(negativeNum);
                negative--;
            }
        } else {
            if (positiveNum >= 0) {
                squares.push(positiveNum);
                positive++;
            } else {
                squares.push(negativeNum);
                negative--;
            }
        }
    }

    return squares.map(num => num * num);
};

console.log(sortedSquares([0]));