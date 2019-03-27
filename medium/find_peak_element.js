const findPeakElement = (arr) => {
    let pre = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pre && arr[i] > arr[i + 1]) {
            return i;
        } 
        pre = arr[i];
    }
    return arr.length - 1;
};