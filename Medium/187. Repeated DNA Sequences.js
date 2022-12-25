const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";

var findRepeatedDnaSequences = function (s) {
    const hashS = new Map();
    const hashResult = new Map();
    const result = [];

    for (let i = 0; i < s.length - 9; i++) {
        const substring = s.slice(i, i + 10);
        if (hashS[substring]) {
            hashS[substring] += 1;
            hashResult.set(substring, true);
        }
        else {
            hashS[substring] = 1;
        }
    };

    for (const key of hashResult) {
        result.push(key[0])
    };

    return result;
};

console.log(findRepeatedDnaSequences(s))