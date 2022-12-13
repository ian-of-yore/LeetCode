const nums = [1, 1, 1, 1, 1];

// const nums = [1, 2, 3, 2];


var sumOfUnique = function (nums) {
    const map = {};
    let sum = 0;

    for (const num of nums) {
        map[num] ? map[num] += 1 : map[num] = 1
    }

    for (let num in map) {
        if (map[num] === 1) {
            sum += parseInt(num)
        }
    }

    return sum;
};

console.log(sumOfUnique(nums))