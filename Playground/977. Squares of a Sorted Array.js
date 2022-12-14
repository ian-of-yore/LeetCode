const nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
    // the following solution takes O(nLog(n)) time as it has to sort the output
    // const arr = [];
    // for (const num of nums) {
    //     arr.push(num * num);
    // }
    // return arr.sort((a, b) => a - b)

    // using two pointers to solve it in linear time
    const arr = new Array(nums.length);
    let startPointerIdx = 0;
    let endPointerIdx = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let startPointerValue = nums[startPointerIdx];
        let endPointerValue = nums[endPointerIdx];

        if (Math.abs(startPointerValue) > Math.abs(endPointerValue)) {
            arr[i] = startPointerValue * startPointerValue;
            startPointerIdx += 1;
        }
        else {
            arr[i] = endPointerValue * endPointerValue;
            endPointerIdx -= 1;
        }
    }

    return arr;
};

console.log(sortedSquares(nums))