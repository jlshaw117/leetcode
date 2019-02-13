const isPalindrome = (str) => {
    // let reversed = str.split('').reverse().join('');
    // return str === reversed;
    for (let idx = 0; idx < str.length / 2; idx++) {
        if (str[idx] === str[str.length - idx - 1]) {
            continue;
        } else {
            return false
        }
    }
    return true
};

const shortestPalindrome = (str) => {
    if (str.length === 0) return str
    let prefix = '';
    for (let idx = str.length; idx > 0; idx--) {
        let sub = str.slice(0, idx);
        if (isPalindrome(sub)) {
            return str.slice(idx).split('').reverse().join('') + str;
        }
    }
};

console.log(shortestPalindrome('abcd'));