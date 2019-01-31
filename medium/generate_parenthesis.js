const generateParenthesis = (n) => {
    let ans = [];
    const rec = (currentString, numOpens, numClosed) => {
        if (currentString.length === n * 2) {
            ans.push(currentString);
            return;
        }
        if (numOpens < n) {
            rec(currentString + '(', numOpens + 1, numClosed);
        }

        if (numClosed < numOpens) {
            rec(currentString + ')', numOpens, numClosed + 1);
        }
    };

    rec('', 0, 0);
    return ans;
};