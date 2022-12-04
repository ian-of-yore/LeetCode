const moves = "LLUDUDRR";

var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;

    for (const move of moves) {
        if (move === 'U') {
            y++;
        }
        if (move === 'D') {
            y--;
        }
        if (move === 'L') {
            x--;
        }
        if (move === 'R') {
            x++;
        }
    }

    return x === 0 && y === 0;

};

console.log(judgeCircle(moves));