const countLetters = (word) => {
    let result = {};
    for (let idx = 0; idx < word.length; idx++) {
        let letter = word[idx];
        if (result[letter]) {
            result[letter] += 1;
        } else {
            result[letter] = 1;
        }
    }
    return result;
};

const minStickers = (stickers, target) => {
    if (target.length < 1) return 0;
    if (stickers.length < 1) return -1;

    const lettersNeeded = countLetters(target);

    let stickerCounts = [];
    stickers.forEach(sticker => stickerCounts.push(countLetters(sticker)));

    let minStickers;

    rec = (stickersIdx, targetIdx, numStickers, availibleLetters) => {
        if (stickersIdx >= sticker.length) {
            if (!minStickers || numStickers < minStickers) {
                minStickers = numStickers;
            }
            return;
        }
        let targetLetter = target[targetIdx];
        if (lettersNeeded[targetLetter]) {
            if (availibleLetters[letter] && availibleLetters[letter] >= lettersNeeded[letter]) {
                rec(stickersIdx, targetIdx + 1, numStickers, availibleLetters);
            } else {
                if (true) {
                    let newAvailibleLetters = Object.assign({}, availibleLetters);
                    let currSticker = stickers[stickersIdx];
                    Object.keys(sticker).forEach(letter => {
                        if (lettersNeeded[letter]) {
                            if (newAvailibleLetters[letter]) {
                                newAvailibleLetters[letter] += sticker[letter];
                            } else {
                                newAvailibleLetters[letter] = sticker[letter];
                            }
                        }
                    });
                    rec(stickersIdx + 1, targetIdx + 1, numStickers + 1, newAvailibleLetters);
                }

                rec()
            }
        } else {
            rec(stickersIdx, targetIdx + 1, numStickers, availibleLetters);
        }

        

    };
};