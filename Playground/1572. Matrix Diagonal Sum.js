const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

var diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i === j) {
                console.log(mat[i][j])
            }
        }
    }
    // return sum;
};

console.log(diagonalSum(mat))