const nums = [4, 4, 2, 4, 3];

var unequalTriplets = function (nums) {
    let count = 0;
    let n = nums.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] != nums[j])
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] != nums[k] && nums[j] != nums[k]) {
                        count++
                    }
                }
        }
    }
    return count
};

console.log(unequalTriplets(nums))