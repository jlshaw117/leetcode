const flipAndInvertImage = (matrix) => {
    let result = [];
    matrix.forEach((arr) => {
        let newArr = arr.reverse();
        for (let i = 0; i < newArr.length; i++) {
            if (arr[i]) {
                arr[i] = 0;
            } else {
                arr[i] = 1;
            }
        }
        result.push(newArr);
    });
    return result;
};