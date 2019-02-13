const isPalindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};

const shortestPalindrome = (str) => {
    let prefix = '';
    for (let idx = str.length; idx > 0; idx--) {
        let sub = str.slice(0, idx);
        if (isPalindrome(sub)) {
            prefix = str.slice(idx).split('').reverse().join('');
            break;
        }
    }

    return prefix + str;
};

console.log(shortestPalindrome('abcd'));