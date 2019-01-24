// Brute Force

// const lengthOfSub = (str) => {
//     let ans = 0;
//     for (let i = 0; i < str.length; i++) {
//         sub = str[i];
//         for (let j = i + 1; j < str.length; j++) {
//             if (sub.includes(str[j])) {
//                 break;
//             } else {
//                 sub += str[j];
//             }
//         }
//         if (sub.length > ans) {
//             ans = sub.length;
//         }
//     }
//     return ans;
// };

// Optimized

const lengthOfSub = (str) => {
    let subStr = new Set();

    let ans = 0;
    let i = 0;
    let j = 0;

    while (j < str.length) {
        if (subStr.has(str[j])) {
            subStr.delete(str[i]);
            i ++;
        } else {
            subStr.add(str[j]);
            j++;
            if (subStr.size > ans) {
                ans = subStr.size;
            }
        }
    }
    return ans;
};