let arr = [1, 2, 4, 6, 7, 9, 11, 13];


function findKthPositive(arr, k) {
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
}

const result = findKthPositive(arr, 4); // ans = 10
console.log(result);



