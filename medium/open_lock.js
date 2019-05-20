// const openLock = (deadEnds, target) => {
//     deadEnds = new Set(deadEnds);
//     let visited = new Set();
//     let queue = [['0000', 0]];
//     while (queue.length) {
//         let [currCombo, count] = queue.shift();
//         if (visited.has(currCombo)) continue;
//         if (currCombo === target) return count;
//         visited.add(currCombo);
//         if (deadEnds.has(currCombo)) continue;
//         for (let i = 0; i < currCombo.length; i++) {
//             let nums = currCombo.split('');
//             let num = parseInt(nums[i]);
//             if (num === 0) {
//                 nums[i] = 1;
//                 queue.push([nums.join(''), count + 1]);
//                 nums[i] = 9;
//                 queue.push([nums.join(''), count + 1]);
//             } else if (num === 9) {
//                 nums[i] = 0;
//                 queue.push([nums.join(''), count + 1]);
//                 nums[i] = 8;
//                 queue.push([nums.join(''), count + 1]);
//             } else {
//                 nums[i] = num + 1;
//                 queue.push([nums.join(''), count + 1]);
//                 nums[i] = num - 1;
//                 queue.push([nums.join(''), count + 1]);
//             }
//         }
//     }
//     return -1;
// };

const openLock = (deadEnds, target) => {
    deadEnds = new Set(deadEnds);
    let visited = new Set();
    let queue = [['0000', 0]];
    while (queue.length) {
        let [currCombo, count] = queue.shift();
        visited.add(currCombo);
        let nums = currCombo.split('');
        for (let i = 0; i < nums.length; i++) {
            num = parseInt(nums[i]);
            let newCombo;
            if (num === 0) {
                nums[i] = 9;
                newCombo = nums.join('');
                if (newCombo === target) return count + 1;
                if (!deadEnds.has(newCombo) && !visited.has(newCombo)) {
                    queue.push([newCombo, count + 1]);
                }
                nums[i] = 1;
                newCombo = nums.join('');
                if (newCombo === target) return count + 1;
                if (!deadEnds.has(newCombo) && !visited.has(newCombo)) {
                    queue.push([newCombo, count + 1]);
                }
            } else if (num === 9) {
                nums[i] = 0;
                newCombo = nums.join('');
                if (newCombo === target) return count + 1;
                if (!deadEnds.has(newCombo) && !visited.has(newCombo)) {
                    queue.push([newCombo, count + 1]);
                }
                nums[i] = 8;
                newCombo = nums.join('');
                if (newCombo === target) return count + 1;
                if (!deadEnds.has(newCombo) && !visited.has(newCombo)) {
                    queue.push([newCombo, count + 1]);
                }
            } else {
                nums[i] = num + 1;
                newCombo = nums.join('');
                if (newCombo === target) return count + 1;
                if (!deadEnds.has(newCombo) && !visited.has(newCombo)) {
                    queue.push([newCombo, count + 1]);
                }
                nums[i] = num - 1;
                newCombo = nums.join('');
                if (newCombo === target) return count + 1;
                if (!deadEnds.has(newCombo) && !visited.has(newCombo)) {
                    queue.push([newCombo, count + 1]);
                }
            }
            nums[i] = num;
        }
    }
    return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));