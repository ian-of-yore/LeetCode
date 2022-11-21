const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

var diagonalSum = function (mat) {
    let sum = 0;
    const n = mat.length;

    for (let i = 0; i < n; i++) {
        sum += mat[i][i] + mat[i][n - i - 1];
    }

    if (n % 2 === 1) {
        sum = sum - mat[(n - 1) / 2][(n - 1) / 2];
    }

    return sum;

}

console.log(diagonalSum(mat))