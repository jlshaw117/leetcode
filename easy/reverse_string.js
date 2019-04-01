const reverseString = (chars) => {
    let start = 0;
    let end = chars.length - 1;
    while (start < end) {
        let leftChar = chars[start];
        let rightChar = chars[end];
        chars[start] = rightChar;
        chars[end] = leftChar;
        start++;
        end--;
    }
};