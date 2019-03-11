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