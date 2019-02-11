const numJewelsInStones = (j, s) => {
    let jewels = new Set(j);

    let numJewels = 0;

    for (let idx = 0; idx < s.length; idx++) {
        if (jewels.has(s[idx])) numJewels ++;
    }

    return numJewels;
};