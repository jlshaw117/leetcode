const encodeWord =(word) => {
    const code = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--.."
    };
    let encoded = '';
    for (let idx = 0; idx < word.length; idx++) {
        encoded += code[word[idx]];
    }

    return encoded;
};

const uniqueMorseRepresentations = (words) => {
    let result = new Set();
    words.forEach(word => result.add(encodeWord(word)));

    return result.size;
};