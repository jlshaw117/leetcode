const sortedSquares = (nums) => {
    let squares = [];

    nums.forEach(num => squares.push(num * num));

    return squares.sort((a,b) => a - b);
};