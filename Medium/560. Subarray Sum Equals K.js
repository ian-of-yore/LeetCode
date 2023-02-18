const nums = [1, 2, 3];
const k = 3;

var subarraySum = function (nums, k) {
    let [hash, count, sum] = [new Map(), 0, 0];
    hash.set(0, 1);

    for (const num of nums) {
        sum += num;
        if (hash.has(sum - k)) {
            count += hash.get(sum - k)
        }
        hash.set(sum, (hash.get(sum) || 0) + 1);
    }

    return count;
};

console.log(subarraySum(nums, k))