// Brute Force

// const zigZag = (str, numRows) => {
//     let matrix = [];
//     for (let row = 0; row < numRows; row++) {
//         matrix[row] = [];
//     }

//     let count = 1;
//     let column = 0; 
//     for (let letter = 0; letter < str.length; letter ++) {
//         for (let row = 0; row < numRows; row++) {
//             matrix[row][column] = str[letter];
//             letter ++;
//         }
//         for (let row = numRows - 2; row  >= 0; row--) {
//             column ++;
//             matrix[row][column] = str[letter];
//             letter ++;
//         }
//         letter -= 2;
//     }

//     let ans = '';
//     for (let row = 0; row < matrix.length; row++) {
//         let arr = matrix[row];
//         for (let col = 0; col < arr.length; col++) {
//             if (arr[col]) {
//                 ans += arr[col];
//             }
//         }
//     }
//     return ans;
// }

// Optimized solution

const zigZag = (str, numRows) => {
    if (numRows <= 1) return str;
    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = '';
    }

    let down = false;
    let row = 0;
    for (let letter = 0; letter < str.length; letter++) {
        rows[row] += str[letter];

        if (row % (numRows - 1) === 0) {
            down = !down;
        }

        if (down) {
            row ++;
        } else {
            row --;
        }
    }
    let ans = '';

    rows.forEach((row) => {
        ans += row;
    });
    return ans;
};

console.log(zigZag('AB', 1));