const s = "]]][[["

var minSwaps = function (s) {
    let [close, maxClose] = [0, 0];

    for (const char of s) {
        if (char === '[') {
            close -= 1;
        } else {
            close += 1;
        }
        maxClose = Math.max(maxClose, close);
    }

    return Math.ceil(maxClose / 2);
};

console.log(minSwaps(s))