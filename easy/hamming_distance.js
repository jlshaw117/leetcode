var hammingDistance = function (x, y) {
    let newNum = x ^ y;
    let bStr = newNum.toString(2);
    let count = 0;
    for (let idx = 0; idx < bStr.length; idx++) {
        if (bStr[idx] === '1') count++;
    }
    return count;
};