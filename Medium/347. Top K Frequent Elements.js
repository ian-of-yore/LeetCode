const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

var topKFrequent = function (nums, k) {
    const hash = new Map();
    let result = [];
    for (let num of nums) {
        hash.set(num, hash.get(num) + 1 || 1)
    }

    const sortedArr = [...hash.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(sortedArr[i][0])
    }

    return result;
};

console.log(topKFrequent(nums, k))