const detectCapitalUse = (word) => {
    if (word.length < 2) return true;
    let letterType;
    if (word[0].charCodeAt() >= 65 && word[0].charCodeAt() <= 90 &&
        word[1].charCodeAt() >= 65 && word[1].charCodeAt() <= 90) {
        letterType = 'lower';
    } else {
        letterType = 'upper';
    }

    for (let idx = 1; idx < word.length; idx++) {
        let char = word[idx];
        if (letterType === 'lower') {
            if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) return false;
        } else {
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) return false;
        }
    }
    return true;
};