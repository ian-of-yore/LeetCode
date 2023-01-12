const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]];

const target = 20;

var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let row = 0;
    let col = n - 1;

    while (row < m && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }
        else if (matrix[row][col] > target) {
            col--;
        }
        else {
            row++;
        }
    }
    return false
};

console.log(searchMatrix(matrix, target))
