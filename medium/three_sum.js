// Brute Force
// const threeSum = (nums) => {
//     let result = [];
//     let set = new Set();
//     if (nums.length < 3) return result;
//     let sorted = nums.sort((a, b) => a - b);
//     for (let x = 0; x < sorted.length - 2; x++) {
//         let a = sorted[x];
//         for (let y = x + 1; y < sorted.length - 1; y++) {
//             let b = sorted[y];
//             for (let z = y + 1; z < sorted.length; z++) {
//                 let c = sorted[z];
//                 let key = `${a},${b},${c}`;
//                 if (a+b+c === 0 && !set.has(key)) {
//                     result.push([a,b,c]);
//                     set.add(key);
//                 }
//             }
//         }
//     }
//     return result;
// };

// Optimized
const threeSum = (nums) => {
    let result = [];
    let set = new Set();
    let sorted = nums.sort((a,b) => a-b);
    for (let idx = 0; idx < sorted.length; idx++) {
        let num = sorted[idx];
        if (num > 0) break;
        let leftIdx = idx + 1;
        let rightIdx = sorted.length - 1;
        while (leftIdx < rightIdx) {
            let key = `${num},${sorted[leftIdx]},${sorted[rightIdx]}`;
            if (num + sorted[leftIdx] + sorted[rightIdx] === 0 && !set.has(key)) {
                result.push([num, sorted[leftIdx], sorted[rightIdx]]);
                set.add(key);
                leftIdx++;
                rightIdx--;
            } else if (num + sorted[leftIdx] + sorted[rightIdx] > 0) {
                rightIdx--;
            } else if (num + sorted[leftIdx] + sorted[rightIdx] < 0) {
                leftIdx++;
            } else {
                leftIdx++;
                rightIdx--;
            }
        }
    }
    return result;
};

console.log(...threeSum([-1, 0, 1, 2, -1, -4]));