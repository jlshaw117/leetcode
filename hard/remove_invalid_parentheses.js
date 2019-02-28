const removeInvalidParentheses = (str) => {

    let result = new Set();
    let min = 0;
    let stack = [];

    for (let idx = 0; idx < str.length; idx++) {
        let el = str[idx];
        if (el === '(') {
            stack.push('(');
        } else if (el === ')') {
            if (!stack.pop()) {
                min++;
            }
        }
    }
    min += stack.length;

    if (min === 0) return [str];

    const rec = (idx, currStr, open, close, numRemoves) => {
        if (close > open || numRemoves > min) return;
        if (idx >= str.length) {
            if (open === close) {
                result.add(currStr);
            }
            return;
        }

        let el = str[idx];

        if (el !== '(' && el !== ')') {
            rec(idx + 1, currStr + el, open, close, numRemoves);
        } else {
            if (el === '(') {
                // Keep current el
                rec(idx + 1, currStr + el, open + 1, close, numRemoves);
                // Remove current el
                rec(idx + 1, currStr, open, close, numRemoves + 1);
            } else if (el === ')') {
                // Keep current el
                rec(idx + 1, currStr + el, open, close + 1, numRemoves);
                // Remove current el
                rec(idx + 1, currStr, open, close, numRemoves + 1);
            }
        }
    };
    rec(0, '', 0, 0, 0);
    let ans = [];
    result.forEach(el => ans.push(el));
    return ans;
};

console.log(removeInvalidParentheses('()())()'));