const s = "Uo";

var halvesAreAlike = function (s) {
    const strSet = new Set('aeiou');
    const halfLength = (s.length / 2);
    let vowelsFirstHalf = 0;
    let vowelsSecondHalf = 0;

    for (let i = 0; i < halfLength; i++) {
        let smallLetter = s[i].toLowerCase();
        if (strSet.has(smallLetter)) {
            vowelsFirstHalf += 1;
        }
    }

    for (let i = halfLength; i < s.length; i++) {
        let smallLetter = s[i].toLowerCase();
        if (strSet.has(smallLetter)) {
            vowelsSecondHalf += 1;
        }
    }

    return vowelsFirstHalf === vowelsSecondHalf;
};

console.log(halvesAreAlike(s));