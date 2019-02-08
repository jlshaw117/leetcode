// Brute Force

// const divide = (dividend, divisor) => {

//     let neg = false;
//     if (dividend < 0) neg = !neg;
//     if (divisor < 0) neg = !neg;

//     let num = Math.abs(divisor);
//     let ans = 0;

//     while (num <= Math.abs(dividend)) {
//         num += Math.abs(divisor);
//         ans += 1;
//     }

//     ans = neg ? 0 - ans : ans;
//     if (ans < -2147483648) {
//         return -2147483648;
//     } else if (ans > 2147483647) {
//         return 2147483647;
//     } else {
//         return ans;
//     }
// };

// Optimized 

const recHelper = (dividend, divisor) => {
    if (dividend - divisor === 0) return [1, 0];
    if (dividend - divisor < 0) return [0, divisor - dividend];
    if (dividend - divisor - divisor === 0) return [2, 0];
    if (dividend - divisor - divisor < 0) return [1, dividend - divisor];

    let [ans, rem] = recHelper(dividend, divisor + divisor);
    ans += ans;
    if (rem >= divisor) {
        ans++;
        rem -= divisor;
    }

    return [ans, rem];
};

const divide = (dividend, divisor) => {
    let neg = false;
    if (dividend < 0) {
        neg = !neg;
        dividend = Math.abs(dividend);
    }
    if (divisor < 0) {
        neg = !neg;
        divisor = Math.abs(divisor);
    }

    let [ans, rem] = recHelper(dividend, divisor);
    ans = neg ? -ans : ans;
    if (ans > 2147483647) ans = 2147483647;
    return ans;
};

//  Optimized using bitwise

// const divide = (dividend, divisor) => {
//     let neg = false;
//     if (dividend < 0) neg = !neg;
//     if (divisor < 0) neg = !neg;

//     let ans = 1;
//     dividend = Math.abs(dividend);
//     divisor = Math.abs(divisor);
//     if (divisor === 1) {
//         ans = dividend;
//     } else {

//         let num = divisor;

//         if (dividend < divisor) return 0;

//         while (dividend >> 1 >= divisor) {
//             dividend = dividend >> 1;
//             ans = ans << 1;
//         }

//         while (dividend > num) {
//             num += divisor;
//             ans++;
//         }

//     }
//     if (neg) {
//         ans = -ans;
//     }

//     return ans > 2147483647 ? 2147483647 : ans

// };

console.log(divide(2147483647, 2));