const nums = [4, 2, 5, 9, 7, 4, 8];

var maxProductDifference = function (nums) {
    const n = nums.length;
    const sorted = nums.sort((a, b) => a - b);

    const highestProduct = sorted[n - 1] * sorted[n - 2];
    const lowestProduct = sorted[0] * sorted[1];

    return highestProduct - lowestProduct;
};

console.log(maxProductDifference(nums));