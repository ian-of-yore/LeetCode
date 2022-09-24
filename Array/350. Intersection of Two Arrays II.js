var intersect = function (nums1, nums2) {
    let obj = {};
    let result = [];

    for (let num of nums1) {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    }

    for (let num of nums2) {
        if (obj[num] > 0) {
            result.push(num);
            obj[num]--;
        }
    }

    return result;
};