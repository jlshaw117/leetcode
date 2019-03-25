const checkPerfectNumber = (num) => {
    if (num === 1) return false;
    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (i === Math.sqrt(num)) {
            sum += i;
        } else if (num % i === 0) {
            sum += i + num / i;
        }
        if (sum > num) return false;
    }

    return sum === num;
};

console.log(checkPerfectNumber(28));