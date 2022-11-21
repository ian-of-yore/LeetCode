const num = "1210";

var digitCount = function (num) {

    let map = {};

    for (let i = 0; i < num.length; i++) {
        if (map[num[i]]) {
            map[num[i]] += 1;
        }
        else {
            map[num[i]] = 1;
        }
    };


    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (map[i] !== undefined) {
            if (map[i] == num[i]) {
                count++;
            }
        }
        else {
            map[i] = 0;
            if (map[i] == num[i]) {
                count++;
            }
        }
    }

    return num.length === count;
};

console.log(digitCount(num));
