const calculate = (str) => {

    let num = '';
    let result = 0;
    let add = true;
    for (let idx = 0; idx < str.length; idx++) {
        if (str[idx] === '(') {
            let open = 1;
            let close = 0;
            let newStr = '';
            while (open > close) {
                idx++;
                if (str[idx] == '(') open++;
                if (str[idx] == ')') close++;
                if (open > close) newStr += str[idx];
            }
            // num = add ? calculate(newStr) : -calculate(newStr);
            num = calculate(newStr);
        }
        if (parseInt(str[idx]) >= 0) {
            num += str[idx];
        } else {
            if (str[idx] === '+' || str[idx] === '-') {
                if (add) {
                    result += parseInt(num);
                } else {
                    result -= parseInt(num);
                }
                num = '';
                add = str[idx] === '+' ? true : false;
            }
        }
    }
    add ? result += parseInt(num) : result -= parseInt(num);
    return result;
};

console.log(calculate("1-(5)"));