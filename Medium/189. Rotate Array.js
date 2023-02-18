const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

var rotate = function (nums, k) {
    k = k % nums.length;
    let left = 0;
    let right = nums.length - 1;

    // Reversing the original array
    while (left < right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
    }

    // Reversing the first K elements
    left = 0;
    right = k - 1;
    while (left < right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
    }

    // Reversing the elements after K point
    left = k;
    right = nums.length - 1;
    while (left < right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
    }

    return nums
};

console.log(rotate(nums, k))