const nums = [23, 2, 4, 6, 7];
const k = 6;

var checkSubarraySum = function (nums, k) {
    if (nums.length < 2) {
        return false;
    }

    const remainder = new Map();
    remainder.set(0, -1);
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        total = total % k;

        if (!remainder.has(total)) {
            remainder.set(total, i);
        } else if (remainder.has(total) && (i - remainder.get(total)) > 1) {
            return true;
        }
    }

    return false;

};

console.log(checkSubarraySum(nums, k))