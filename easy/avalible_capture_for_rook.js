const findCapture = (board, origin, rowDiff, colDiff) => {
    let row = origin[0] + rowDiff;
    let col = origin[1] + colDiff;
    if (row < 0 || row >= board.length || col < 0 || col >= board.length) return null;
    if (board[row][col] !== '.') return board[row][col];
    return findCapture(board, [row,col], rowDiff, colDiff);
};

const numRookCaptures = (board) => {
    let origin;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] === 'R') {
                origin = [row,col]; 
                break;
            } 
        }
        if (origin) break;
    }
    if (!origin) return 0;

    let count = 0;
    if (findCapture(board, origin, 1, 0) === 'p') count++;
    if (findCapture(board, origin, -1, 0) === 'p') count++;
    if (findCapture(board, origin, 0, 1) === 'p') count++;
    if (findCapture(board, origin, 0, -1) === 'p') count++;

    return count;

};

console.log(numRookCaptures([[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]));