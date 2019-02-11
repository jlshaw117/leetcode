// Brute Force
// const isValid = (str) => {
//     const combo = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     };

//     let stack = [];

//     for (let idx = 0; idx < str.length; idx++) {
//         if (combo[str[idx]]) {
//             stack.push(str[idx]);
//         } else if (stack.length === 0) {
//             return false;
//         } else {
//             let curr = stack.pop();
//             if (str[idx] !== combo[curr]) return false;
//         }
//     }

//     return stack.length === 0;
// };

// const longestValidParentheses = (str) => {
//     let result = 0;

//     for (let idx = 0; idx < str.length; idx++) {
//         let open = 1;
//         let close = 0;
//         if (str[idx] === ')') continue;
//         for (let j = idx + 1; j <= str.length; j++) {
//             if (str[j] === ')') {
//                 close += 1;
//             } else {
//                 open += 1;
//             }

//             if (close > open) break;
//             let sub = str.slice(idx, j);
//             if (isValid(sub) && sub.length > result) result = sub.length;
//         }
//     }

//     return result;
// };

// const longestValidParentheses = (str) => {
//     let result = 0;

//     for (let i = 0; i < str.length; i++) {
//         let open = 0;
//         let close = 0;
//         if (str[i] === ')') continue;
        
//         for (let j = i; j <= str.length; j++) {
//             if (str[j] === '(') {
//                 open ++;
//             } else {
//                 close ++;
//             }

//             if (close > open) break;

//             if (close === open && (j - i) > result && isValid(str.slice(i,j))) {
//                 result = (j - i);
//             }
//         }
//     }
//     return result;
// };
// 
// Optimized

// const longestValidParentheses = (str) => {
//     let stack = [-1];
//     let result = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ')') {
//             stack.pop();
//             if (stack.length) {
//                 let len = i - stack[stack.length - 1];
//                 result = len > result ? len : result;
//             } else {
//                 stack.push(i);
//             }
//         } else {
//             stack.push(i);
//         }
//     }
//     return result;
// };

const longestValidParentheses = (str) => {
    let result = 0;

    let open = 0;
    let close = 0;

    for (let idx = 0; idx < str.length; idx ++) {
        if (open === close && open + close > result) result = open + close;
        if (str[idx] === '(') {
            open++;
        } else {
            close ++;
        }
        if (close > open) {
            open = 0;
            close = 0;
        }
    }
    if (open === close && open + close > result) result = open + close;
    open = 0;
    close = 0;

    for (let idx = str.length - 1; idx >= 0; idx--) {
        if (open === close && open + close > result) result = open + close;
        if (str[idx] === '(') {
            open++;
        } else {
            close++;
        }
        if (open > close) {
            open = 0;
            close = 0;
        }
    }
    if (open === close && open + close > result) result = open + close;
    return result;
};

console.log(longestValidParentheses('(()'));