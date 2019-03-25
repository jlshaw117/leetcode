const isSelfDividing = (num) => {
    let digits = num.toString().split('').map(digit => parseInt(digit));
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0 || num % digits[i]) return false;
    }
    return true;
};

const selfDividingNumbers = (left, right) => {
    let result = [];
    for (;left <= right; left++) {
        if (isSelfDividing(left)) result.push(left);
    }
    return result;
};

