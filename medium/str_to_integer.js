const strToInt = (str) => {
    let digits = str.trim();
    let startingValues = '+-0123456789';
    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31) - 1;
    if (!startingValues.includes(digits[0])) {
        return 0;
    }
    let idx = 0;
    let neg = false;
    if (digits[0] === '+' || digits[0] === '-') {
        idx = 1;
        if (digits[0] === '-') neg = true;
    }
    let ans = 0;
    for (idx; idx <= str.length; idx++) {
        switch (digits.charCodeAt(idx)) {
            case 48:
                ans = ans * 10 + 0;
                break;
            case 49:
                ans = ans * 10 + 1;
                break;
            case 50:
                ans = ans * 10 + 2;
                break;
            case 51:
                ans = ans * 10 + 3;
                break;
            case 52:
                ans = ans * 10 + 4;
                break;
            case 53:
                ans = ans * 10 + 5;
                break;
            case 54:
                ans = ans * 10 + 6;
                break;
            case 55:
                ans = ans * 10 + 7;
                break;
            case 56:
                ans = ans * 10 + 8;
                break;
            case 57:
                ans = ans * 10 + 9;
                break;
            default:
                if (neg) {
                    ans *= -1;
                }
            
                if (ans < min) {
                    return min;
                } else if (ans > max) {
                    return max;
                } else {
                    return ans;
                }
        }
    }
};