const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

var findKthLargest = function (nums, k) {
    k = nums.length - k;

    const quickSelect = (left, right) => {
        let pivot = nums[right];
        let pointer = left;

        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
                pointer += 1;
            }
        }

        [nums[pointer], nums[right]] = [nums[right], nums[pointer]];

        if (pointer > k) {
            return quickSelect(left, pointer - 1);
        }
        else if (pointer < k) {
            return quickSelect(pointer + 1, right);
        }
        else {
            return nums[pointer]
        }
    }

    return quickSelect(0, nums.length - 1)

};

console.log(findKthLargest(nums, k))