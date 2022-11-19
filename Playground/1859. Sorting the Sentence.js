// const s = "z1 z2 z3";
const s = "is2 sentence4 This1 a3";

var sortSentence = function (s) {
    const words = s.split(' ');
    const result = [];

    for (const word of words) {
        const slicedWord = word.slice(0, -1);
        const indexWord = word.slice(-1);
        result[indexWord - 1] = slicedWord;
    }

    return result.join(' ');
};

console.log(sortSentence(s));