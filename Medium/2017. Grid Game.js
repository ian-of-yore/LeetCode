const grid = [[2, 5, 4], [1, 5, 1]];

var gridGame = function (grid) {
    const N = grid[0].length;
    let preFixSumRow1 = grid[0];
    let preFixSumRow2 = grid[1];

    for (let i = 1; i < N; i++) {
        preFixSumRow1[i] += preFixSumRow1[i - 1];
        preFixSumRow2[i] += preFixSumRow2[i - 1];
    }

    let result = Infinity;
    let topSum = 0;
    let bottomSum = 0;
    let secondRobot;

    for (let i = 0; i < N; i++) {
        topSum = preFixSumRow1[preFixSumRow1.length - 1] - preFixSumRow1[i];
        if (i > 0) {
            bottomSum = preFixSumRow2[i - 1];
        }
        secondRobot = Math.max(topSum, bottomSum);
        result = Math.min(result, secondRobot);
    }

    return result;

};

console.log(gridGame(grid))