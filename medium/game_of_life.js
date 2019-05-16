// const sumNeighbors = (board,i,j) => {
//     let dirs = [
//         [-1,-1], 
//         [-1,0], 
//         [-1, 1], 
//         [0, 1], 
//         [1,1], 
//         [1,0], 
//         [1,-1],
//         [0,-1]
//     ];
//     let sum = 0;
//     for (let dir of dirs) {
//         let row = i + dir[0];
//         let col = j + dir[1];
//         if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) continue;
//         sum += board[row][col];
//     }
//     return sum;
// };

// const gameOfLife = (board) => {
//     let ans = new Array(board.length).fill().map(() => new Array(board[0].length));
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             let currState = board[i][j];
//             let sum = sumNeighbors(board, i, j);
//             let newState;
//             if (currState) {
//                 if (sum < 2 || sum > 3) {
//                     newState = 0;
//                 } else {
//                     newState = 1;
//                 }
//             } else {
//                 if (sum === 3) {
//                     newState = 1;
//                 } else {
//                     newState = 0;
//                 }
//             }
//             ans[i][j] = newState;
//         }
//     } 
//     for (let row in ans) {
//         board[row] = ans[row];
//     }
// };

const numLiveNeighbors = (board, i, j) => {
    let dirs = [
        [-1,-1],
        [-1,0], 
        [-1, 1], 
        [0, 1], 
        [1,1], 
        [1,0], 
        [1,-1],
        [0,-1]
    ];
    let sum = 0;
    for (let dir of dirs) {
        let row = i + dir[0];
        let col = j + dir[1];
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) continue;
        if (board[row][col] === 1 || board[row][col] === 2) sum++;
    }
    return sum;
};

const gameOfLife = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let count = numLiveNeighbors(board, i, j);
            let currState = board[i][j];
            if (currState) {
                if (count < 2 || count > 3) board[i][j] = 2;
            } else {
                if (count === 3) board[i][j] = 3;
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] %= 2;
        }
    }
    return board;
};

console.log(...gameOfLife([[0,1]]));

// Any live cell with fewer than two live neighbors dies, as if caused by under - population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over - population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.