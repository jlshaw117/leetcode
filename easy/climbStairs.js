// Brute Force recursion

// var climbStairs = function (n) {
//     if(n <= 1) return 1;

//     return climbStairs(n-1) + climbStairs(n-2);
// };

// Using Fibonacci

var climbStairs = function (n) {
    if (n < 3) return n;
    let fib = [1, 2];
    let ans;
    while (fib.length < n) {
        let i = fib.length;
        ans = fib[i - 1] + fib[i - 2];
        fib[i] = ans;
    }
    return ans;
};




