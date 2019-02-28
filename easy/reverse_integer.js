const reverse = (num) => {
    let neg = false;
    if (num < 0) {
        neg = true;
        num *= -1;
    }
    let result = 0;
    while (num) {
        let dig = num % 10;
        num = Math.floor(num / 10);
        result = result * 10 + dig;
    }
    result = neg ? result * -1 : result;
    if (result < -2147483648 || result > 2147483647) return 0;
    return result;
};