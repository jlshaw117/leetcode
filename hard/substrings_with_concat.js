// const hash = (str) => {
//     let sum = 1;
//     for (let idx = 0; idx < str.length; idx++) {
//         sum *= (str.charCodeAt(idx) * (idx + 1));
//     }
//     return sum;
// };

const findSubstring = (str, words) => {
    if (str.length === 0 || words.length === 0) return [];

    let hashValue = words.reduce((sum, word) => {
        return sum + hash(word);
    }, 0);

    let result = [];

    let numWords = words.length;
    let wordLen = words[0].length;
    let len = wordLen * numWords;

    for (let i = 0; i < str.length - len + 1; i++) {
        let newValue = 0;
        for (let j = i; j < i + len; j += wordLen) {
            newValue += hash(str.substr(j, wordLen));
        }
        if (newValue === hashValue) result.push(i);
    }
    return result;
};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]));