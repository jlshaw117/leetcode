var climbStairs = function (n) {
    if(n <= 1) return 1;

    return climbStairs(n-1) + climbStairs(n-2);
};




