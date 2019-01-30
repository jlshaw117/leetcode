// const isValid = (str) => {
//     let stack = [];
//     let open = new Set(['(', '{', '[']);
//     let close = new Set([')', '}', ']']);


//     for (let idx = 0; idx < str.length; idx++) {
//         if (open.has(str[idx])) {
//             stack.push(str[idx]);
//         } else if (stack.length > 0) {
//             let curr = stack.pop();
//             switch (curr) {
//                 case '(':
//                     if (str[idx] === ')') {
//                         break;
//                     } else {
//                         return false;
//                     }
//                 case '{':
//                     if (str[idx] === '}') {
//                         break;
//                     } else {
//                         return false;
//                     }
//                 case '[':
//                     if (str[idx] === ']') {
//                         break;
//                     } else {
//                         return false;
//                     }
//                 default:
//                     break;
//             }
//         } else {
//             return false;
//         }
//     }
//     if (stack.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// Different Approach
const isValid = (str) => {
    const combo = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stack = [];

    for (let idx = 0; idx < str.length; idx++) {
        if (combo[str[idx]]) {
            stack.push(str[idx]);
        } else if (stack.length === 0) {
            return false;
        } else {
            let curr = stack.pop();
            if (str[idx] !== combo[curr]) return false;
        }
    }

    return stack.length === 0;
};

isValid('(]');