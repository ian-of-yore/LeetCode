var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let leftIndex = 1;
        let rightIndex = n;

        while (leftIndex <= rightIndex) {
            midIndex = Math.floor((leftIndex + rightIndex) / 2);

            if (isBadVersion(midIndex)) {
                rightIndex = midIndex - 1;
            }
            else {
                leftIndex = midIndex + 1;
            }
        }
        return leftIndex;
    };
};