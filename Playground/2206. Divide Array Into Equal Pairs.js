const nums = [3, 2, 3, 2, 2, 2];

var divideArray = function (nums) {
    const numMap = new Map();

    for (const num of nums) {
        numMap.has(num) ? numMap.delete() : numMap.set(num, true);
    }

    return numMap.size === 0;
};

console.log(divideArray(nums))