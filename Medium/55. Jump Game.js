const nums = [2, 2, 1, 0, 4];

var canJump = function (nums) {
    let goal = nums.length - 1;

    for (let i = nums.length; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};

console.log(canJump(nums))