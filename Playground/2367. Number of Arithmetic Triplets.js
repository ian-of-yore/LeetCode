const nums = [0, 1, 4, 6, 7, 10];
const diff = 3;

var arithmeticTriplets = function (nums, diff) {
    const numsSet = new Set(nums);
    let count = 0;

    for (const num of nums) {
        if (numsSet.has(num + diff) && numsSet.has(num + diff * 2)) {
            count++;
        }
    }

    return count;
};

console.log(arithmeticTriplets(nums, diff));