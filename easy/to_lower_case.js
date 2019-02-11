const toLowerCase = (str) => {
    for (let idx = 0; idx < str.length; idx++) {
        let code =str.charCodeAt(idx);
        if (code <= 90 && code >= 65) {
            str = str.replace(str[idx], String.fromCharCode(code + 32));
        }
    }
    return str;
};

console.log(toLowerCase('HELLO'));