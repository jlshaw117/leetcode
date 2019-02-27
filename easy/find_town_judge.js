const findJudge = (num, trust) => {

    if (num === 1 && trust.length === 0) return num;
    let map1 = {};
    let map2 = {};
    trust.forEach(arr => {
        if (map1[arr[1]]) {
            map1[arr[1]].push(arr[0]);
        } else {
            map1[arr[1]] = [arr[0]];
        }

        if (map2[arr[0]]) {
            map2[arr[0]].push([1]);
        } else {
            map2[arr[0]] = [arr[1]];
        }
    });

    let ans = -1;

    Object.keys(map1).forEach(person => {
        if (map1[person].length === num - 1 && !map2[person]) ans = person;
    });

    return ans;
};

console.log(findJudge(2, [[1,2]]));