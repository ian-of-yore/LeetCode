const num = 2932;

var minimumSum = function (num) {
    const numStr = num.toString().split('');
    const numArr = [];

    for (const i of numStr) {
        let numInt = parseInt(i);
        numArr.push(numInt)
    }

    const arrSorted = numStr.sort((a, b) => a - b);
    const new1 = arrSorted[0] + arrSorted[2];
    const new2 = arrSorted[1] + arrSorted[3];

    return parseInt(new1) + parseInt(new2)
};

console.log(minimumSum(num));