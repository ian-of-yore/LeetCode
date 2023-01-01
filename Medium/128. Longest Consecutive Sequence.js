const nums = [100, 4, 200, 1, 3, 2];

var longestConsecutive = function (nums) {
    const numsSet = new Set(nums);
    let longestSeq = 0;

    for (const num of nums) {
        if (!numsSet.has(num - 1)) {
            let seqLength = 0;
            while (numsSet.has(num + seqLength)) {
                seqLength++;
            };

            longestSeq = Math.max(seqLength, longestSeq);
        }
    };

    return longestSeq
};

console.log(longestConsecutive(nums))