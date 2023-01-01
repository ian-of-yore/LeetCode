const nums = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    let preFix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = preFix;
        preFix *= nums[i];
    }

    let postFix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postFix;
        postFix *= nums[i];
    }

    return result
};

console.log(productExceptSelf(nums))