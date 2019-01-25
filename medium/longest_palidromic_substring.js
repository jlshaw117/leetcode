const palindrome = (str) => {

    for (let idx = 0; idx < Math.floor(str.length / 2); idx++) {
        if (str[idx] !== str[str.length - idx - 1]) {
            return false;
        }
    }
    return true;
};

const logestPalindrome = (s) => {
    if (s.length === 1) return s;
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let sub = s.slice(i, j + 1);
            if (palindrome(sub) && sub.length > ans.length) {
                ans = sub;
            }
        }
    }
    return ans;
};