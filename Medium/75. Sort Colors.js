const nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
    let left = 0; right = nums.length - 1; i = 0;

    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };

    while (i <= right) {
        if (nums[i] === 0) {
            swap(left, i);
            left++;
        }
        else if (nums[i] === 2) {
            swap(i, right);
            right--;
            i--;
        }

        i++;
    }
};

console.log(sortColors(nums))