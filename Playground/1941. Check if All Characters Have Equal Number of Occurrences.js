const s = "aaabb";

var areOccurrencesEqual = function (s) {
    const map = {};

    for (const char of s) {
        if (!map[char]) {
            map[char] = 1;
        }
        else {
            map[char] += 1;
        }
    }

    const freq = map[s[0]];

    for (const key in map) {
        if (map[key] !== freq) {
            return false;
        }
    }

    return true;
};

console.log(areOccurrencesEqual(s));