const sumEvenAfterQueries = (arr, queries) => {
    let evenSum = arr.reduce((sum, num) => {
        if (num & 1) {
            return sum;
        } else {
            return sum + num;
        }
    }, 0);

    let result = [];

    queries.forEach(query => {
        let mod = query[0];
        let idx = query[1];

        if (!(arr[idx] & 1)) {
            evenSum -= arr[idx];
        }

        if (!((arr[idx] += mod) & 1)) {
            evenSum += arr[idx];
        }

        result.push(evenSum);
    });

    return result;
};