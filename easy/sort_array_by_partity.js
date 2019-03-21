const sortArrayByParity = (nums) => {
    let result = [];
    nums.forEach(num => {
        if (num % 2) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    });
    return result;
};