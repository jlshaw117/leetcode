const lengthOfSub = (str) => {
    let ans = '';

    let startIdx = 0;
    for (let idx = 1; idx <= str.length; idx++) {
        
        if (str.slice(startIdx, idx).includes(str[idx]) || !(str[idx])) {
            if (str.slice(startIdx, idx).length > ans.length) {
                ans = str.slice(startIdx, idx);
            }
            startIdx = idx;
        }
    }
    return ans.length;
};