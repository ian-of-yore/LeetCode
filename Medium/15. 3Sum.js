const nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
    const result = [];
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            if (threeSum > 0) {
                right--;
            }
            else if (threeSum < 0) {
                left++;
            }
            else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return result;
};

console.log(threeSum(nums))