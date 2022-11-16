const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const missingNumber = (nums) => {
    const numsSet = new Set(nums);
    let missingNumber = 0;
    for (let i = 1; i <= nums.length; i++) {
        if (numsSet.has(i)) {
            continue;
        }
        else {
            missingNumber = i;
        }
    }
    return missingNumber;
}

console.log(missingNumber(nums));