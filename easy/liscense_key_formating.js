//  O(n^2)

// const licenseKeyFormatting = (str, k) => {

//     let ans = [];
//     for (let idx = 0; idx < str.length; idx++) {
//         if (str[idx] === '-') continue;
//         ans.push(str[idx].toUpperCase());
//     }

//     let rem = ans.length % k;

//     if (!rem) rem = k;

//     while (rem < ans.length) {
//         ans.splice(rem, 0, '-');
//         rem += k + 1;
//     }

//     return ans.join('');

// };

// O(N)

const licenseKeyFormatting = (str, k) => {

    let newStr = '';
    for (let idx = 0; idx < str.length; idx++) {
        if (str[idx] === '-') continue;
        newStr += str[idx].toUpperCase();
    }

    let rem = newStr.length % k ? newStr.length % k : k;
    let ans = newStr.slice(0, rem);
    let nextDash = rem;
    for (let idx = 0; idx < newStr.length; idx++) {
        if (idx === nextDash) {
            ans += `-`;
            nextDash += k;
            ans += newStr.slice(idx, idx + k);
        }
    }

    return ans;
};