const text = "hello world";
const brokenLetters = "ad";

var canBeTypedWords = function (text, brokenLetters) {
    const hasBrokenLetter = (word, brokenLetters) => {
        let wordSet = new Set(word);
        for (const i of brokenLetters) {
            if (wordSet.has(i)) {
                return true;
            }
        }
        return false;
    }

    let count = 0;
    const words = text.split(' ');

    for (const word of words) {
        const typeStatus = hasBrokenLetter(word, brokenLetters);
        if (!typeStatus) {
            count++;
        }
    }

    return count;
};

console.log(canBeTypedWords(text, brokenLetters));




// console.log(hasBrokenLetter('world', 'ad'))