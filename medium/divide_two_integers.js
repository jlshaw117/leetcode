// Brute Force

const divide = (dividend, divisor) => {

    let neg = false;
    if (dividend < 0) neg = !neg;
    if (divisor < 0) neg = !neg;

    let num = Math.abs(divisor);
    let ans = 0;

    while (num <= Math.abs(dividend)) {
        num += Math.abs(divisor);
        ans += 1;
    }

    ans = neg ? 0 - ans : ans;
    if (ans < -2147483648) {
        return -2147483648;
    } else if (ans > 2147483647) {
        return 2147483647;
    } else {
        return ans;
    }
};