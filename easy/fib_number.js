// Brute Force
// const fib = (n) => {
//     if (n < 2) return n;
//     return fib(n -1) + fib(n - 2);
// };

// Optimized

const fib = (n) => {
    let fibs = [0,1];
    while (fibs.length < n + 1) {
        let i = fibs.length - 1;
        let j = fibs.length - 2;
        fibs.push(fibs[i] + fibs[j]);
    }
    return fibs[n];
};