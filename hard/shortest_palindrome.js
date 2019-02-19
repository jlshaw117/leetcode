// const isPalindrome = (str) => {
//     for (let idx = 0; idx < str.length / 2; idx++) {
//         if (str[idx] === str[str.length - idx - 1]) {
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

// const shortestPalindrome = (str) => {
//     if (str.length === 0) return str;
//     let prefix = '';
//     for (let idx = str.length; idx > 0; idx--) {
//         let sub = str.slice(0, idx);
//         if (isPalindrome(sub)) {
//             return str.slice(idx).split('').reverse().join('') + str;
//         }
//     }
// };

// Optimized

const shortestPalindrome = (str) => {
    let i = 0;
    let end = str.length - 1;
    for (let j = str.length - 1; j > 0; j--) {
        if (str[i] === str[j]) {
            i ++;
        } else {
            end --;
            j = end + 1;
            i = 0;
        }
    }

    let prefix = str.slice(i + 1).split('').reverse().join('');

    return prefix + str;
};

console.log(shortestPalindrome("aacecaaa"));