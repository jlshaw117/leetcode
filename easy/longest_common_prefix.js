const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return ""
    let leng = strs.reduce((accum, str) => {
        return str.length < accum ? str.length : accum;
    }, Infinity);
    let ans = ''
    for (let idx = 0; idx < leng; idx++) {
        let curr = strs[0][idx];

        if (strs.every(str => str[idx] === curr)) {
            ans += curr
        } else {
            return ans
        }
    }
    return ans
};

