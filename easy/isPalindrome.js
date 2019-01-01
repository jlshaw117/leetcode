let convertToArray = (x) => {
    if (x < 10) return [x];

    let lastDigit = x % 10;
    let nextNum = Math.floor(x/10);
    let ans = convertToArray(nextNum);
    ans.push(lastDigit);
    return ans;
};

let isPalindrome = function (x) {
    if (x < 0) return false;

    let numsArray = convertToArray(x);
    let reversed = numsArray.slice().reverse();
    
    for (let idx = 0; idx < numsArray.length; idx++) {
        if(numsArray[idx] !== reversed[idx]) return false;
    }
    return true;
};

console.log(isPalindrome(123));