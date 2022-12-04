const nums1 = [1, 1, 3, 2];
const nums2 = [2, 3];
const nums3 = [3];

var twoOutOfThree = function (nums1, nums2, nums3) {
    const result = [];
    const numsSet = new Set([...nums1, ...nums2, ...nums3]);
    const numsArr = [nums1, nums2, nums3];

    for (const num of numsSet) {
        let count = 0;
        for (let i = 0; i < numsArr.length; i++) {
            let set = new Set(numsArr[i]);
            if (set.has(num)) {
                count++;
            }
        }
        if (count >= 2) {
            result.push(num)
        }
    }
    return result;
};

console.log(twoOutOfThree(nums1, nums2, nums3))