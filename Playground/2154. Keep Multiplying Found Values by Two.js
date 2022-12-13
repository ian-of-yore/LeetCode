const nums = [2];
const original = 2;

var findFinalValue = function (nums, original) {
    const numsMap = new Map();

    for (const num of nums) {
        if (!numsMap.has(num)) {
            numsMap.set(num, true)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(original)) {
            original = original * 2;
        }
    }

    return original
};

console.log(findFinalValue(nums, original))