const nums = [1, 5, 0, 3, 5];

var minimumOperations = function (nums) {
    const numsSet = new Set(nums);
    numsSet.delete(0);
    return numsSet.size;
};

console.log(minimumOperations(nums))