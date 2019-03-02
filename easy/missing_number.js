const missingNumber = (nums) => {
    let sum = 0;
    for (let num = 1; num <= nums.length; num++) {
        sum += num;
    }

    nums.forEach(num => {
        sum -= num;
    });

    return sum;
};