const n = 5;

var climbStairs = function (n) {
    let oneStep = 1, twoStep = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = oneStep;
        oneStep = oneStep + twoStep;
        twoStep = temp;
    }

    return oneStep;
};

console.log(climbStairs(n))