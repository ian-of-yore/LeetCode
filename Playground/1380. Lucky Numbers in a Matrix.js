const matrix = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
];

var luckyNumbers = function (matrix) {
    let min = 0, idx = 0, luckies = [];

    for (let i = 0; i < matrix.length; i++) {
        min = Math.min(...matrix[i]);
        idx = matrix[i].indexOf(min);

        if (matrix.every(el => el[idx] <= min)) {
            luckies.push(min);
        }
    }

    return luckies;
};

console.log(luckyNumbers(matrix))