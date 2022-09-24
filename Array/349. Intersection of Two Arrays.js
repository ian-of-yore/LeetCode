var intersection = function (nums1, nums2) {

    let obj = {};
    let intersect = [];

    for (let num of nums1) {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    }

    for (let num of nums2) {
        if (obj[num] > 0) {
            intersect.push(num);
            obj[num]--;
        }
    }
    return result = [...new Set(intersect)]
};