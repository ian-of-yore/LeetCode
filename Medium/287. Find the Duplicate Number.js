const nums = [1, 3, 4, 2, 2];

var findDuplicate = function (nums) {
    let [slow, fast] = [0, 0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let slow2 = 0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];

        if (slow === slow2) {
            break;
        }
    };

    return slow;
};

console.log(findDuplicate(nums))