// const singleNumber = (nums) => {
//     let set = new Set(nums);

//     let sum = 0;
//     set.forEach(num => sum += num);

//     return (2 * sum) - nums.reduce((agg, num) => agg + num); 
// };

// Optomized

const singleNumber = (nums) => {
    return nums.reduce((agg, num) => agg ^ num);
};

console.log(singleNumber([2,2,1]));