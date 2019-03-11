// Brute Force
// const canConstruct = (note, mag) => {
//     let magArr = mag.split('');

//     for (let idx = 0; idx < note.length; idx++) {
//         let letter = note[idx];
//         if (magArr.includes(letter)) {
//             magArr.splice(magArr.indexOf(letter), 1);
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

// Optimized

const canConstruct = (note, mag) => {
    let letterCount = {};

    for (let idx = 0; idx < mag.length; idx++) {
        let letter = mag[idx];

        if (letterCount[letter]) {
            letterCount[letter] += 1;
        } else {
            letterCount[letter] = 1;
        }
    }

    for (let idx = 0; idx < note.length; idx++) {
        let letter = note[idx];
        if (letterCount[letter]) {
            letterCount[letter] -= 1;
        } else {
            return false;
        }
    }

    return true;
};

console.log(canConstruct('a', 'b'));