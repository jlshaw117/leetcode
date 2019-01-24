

const reverse = (num) => {
    let originalMag = magnitude(num);
    let result = 0;
    while (!(magnitude(result) === originalMag)) {
        lastDig = pop(num);
        num = (num - lastDig) / 10;
        result = push(result, lastDig);
    }
    return result;
};

const pop = (num) => {
    return num % 10;
};

const push = (num, val) => {
    return num * 10 + val;
};

const magnitude = (num) => {
    let magnitude = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        magnitude += 1;
    }
    return magnitude;
};