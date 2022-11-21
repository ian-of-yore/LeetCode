const s = "RLRRLLRLRL";

var balancedStringSplit = function (s) {
    let count = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[0]) {
            balance += 1;
        }
        else {
            balance -= 1;
        }
        if (balance === 0) {
            count++;
        }
    }

    return count;

};

console.log(balancedStringSplit(s));