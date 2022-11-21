var findKthPositive = function (arr, k) {
    let arrSet = new Set(arr);
    let loopLength = arr.length + 1 + k;

    for (let i = 1; i <= loopLength; i++) {
        if (!arrSet.has(i)) {
            k--;
            if (k === 0) {
                return i;
            }
        }

    }
};