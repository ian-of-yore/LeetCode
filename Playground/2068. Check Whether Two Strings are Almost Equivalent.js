// const word1 = "aaaa";
// const word2 = "bccb";

const word1 = "abcdeef";
const word2 = "abaaacc";

// const word1 = "aaaab";
// const word2 = "zzzza";

var checkAlmostEquivalent = function (word1, word2) {
    const map = new Map();

    const addToMap = (ch, add) => {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + (add ? +1 : -1))
        }
        else {
            map.set(ch, (add ? 1 : -1))
        }
    }

    for (let i = 0; i < word1.length; i++) {
        addToMap(word1[i], true);
        addToMap(word2[i], false);
    }

    for (const value of map.values()) {
        if (Math.abs(value) > 3) {
            return false;
        }
    }

    return true;
};

console.log(checkAlmostEquivalent(word1, word2))