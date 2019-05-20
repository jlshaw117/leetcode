const openLock = (deadEnds, target) => {
    deadEnds = new Set(deadEnds);
    let visited = new Set();
    let queue = [['0000', 0]];
    while (queue.length) {
        let [currCombo, count] = queue.shift();
        if (visited.has(currCombo)) continue;
        if (currCombo === target) return count;
        visited.add(currCombo);
        if (deadEnds.has(currCombo)) continue;
        for (let i = 0; i < currCombo.length; i++) {
            let nums = currCombo.split('');
            let num = parseInt(nums[i]);
            if (num === 0) {
                nums[i] = 1;
                queue.push([nums.join(''), count + 1]);
                nums[i] = 9;
                queue.push([nums.join(''), count + 1]);
            } else if (num === 9) {
                nums[i] = 0;
                queue.push([nums.join(''), count + 1]);
                nums[i] = 8;
                queue.push([nums.join(''), count + 1]);
            } else {
                nums[i] = num + 1;
                queue.push([nums.join(''), count + 1]);
                nums[i] = num - 1;
                queue.push([nums.join(''), count + 1]);
            }
        }
    }
    return -1;
};