const num = "1210";

var digitCount = function (num) {
    const arrNum = num.split('');
    const mapGivenNum = {};
    for (const digit of arrNum) {
        if (mapGivenNum[digit]) {
            mapGivenNum[digit] += 1;
        }
        else {
            mapGivenNum[digit] = 1
        }
    }

    return mapGivenNum;
};

console.log(digitCount(num));