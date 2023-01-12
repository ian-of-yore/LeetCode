const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]];

// const sorted = [1,5,9,10,11,12,13,13,15];
const k = 8;

var kthSmallest = function (matrix, k) {
    const countNums = (num, matrix) => {
        let n = matrix.length;
        let row = 0;
        let col = n - 1;
        let count = 0;

        while (row < n && col >= 0) {
            if (matrix[row][col] <= num) {
                count += col + 1;
                row += 1;
            }
            else {
                col -= 1;
            }
        }
        return count;
    }

    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countNums(mid, matrix) < k) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }

    return right;
};

console.log(kthSmallest(matrix, k))
