const countAndSay = (n) => {
    if (n === 1) return '1';

    let preResult = (countAndSay(n -1));

    let count = 1;
    let num = preResult[0];
    let result = '';

    for (let idx = 1; idx < preResult.length; idx ++) {
        if (num === preResult[idx]) {
            count ++;
        } else {
            result += count + num;
            count = 1;
            num = preResult[idx];
        }
    }

    return result + count + num;
};