const licenseKeyFormatting = (str, k) => {

    let ans = [];
    for (let idx = 0; idx < str.length; idx++) {
        if (str[idx] === '-') continue;
        ans.push(str[idx].toUpperCase());
    }

    let rem = ans.length % k;

    if (!rem) rem = k;

    while (rem < ans.length) {
        ans.splice(rem, 0, '-');
        rem += k + 1;
    }

    return ans.join('');

};