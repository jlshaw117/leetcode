const lengthOfSub = (str) => {
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
        sub = str[i];
        for (let j = i + 1; j < str.length; j++) {
            if (sub.includes(str[j])) {
                break;
            } else {
                sub += str[j];
            }
        }
        if (sub.length > ans) {
            ans = sub.length;
        }
    }
    return ans;
};

lengthOfSub('abcabcbb');