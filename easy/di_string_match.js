var diStringMatch = function (S) {
    let start = 0
    let end = S.length
    let result = []

    for (i = 0; i < S.length; i++) {
        if (S[i] === 'I') {
            result.push(start)
            start++
        } else {
            result.push(end)
            end--
        }
    }
    result.push(start)
    return result
};