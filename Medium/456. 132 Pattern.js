const nums = [3, 1, 4, 2];

var find132pattern = function (nums) {
    const stack = [];  // pari of values [num, minLeft]
    let curMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // this while loop eliminates all the smaller values when it finds a bigger value
        while (stack.length && nums[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        // this block executes when there's a big value on the stack than this current one 
        // and there was a min value previously
        if (stack.length && nums[i] > stack[stack.length - 1][1]) {
            return true;
        }

        stack.push([nums[i], curMin]);
        curMin = Math.min(curMin, nums[i]);
    }

    return false;
};

console.log(find132pattern(nums))