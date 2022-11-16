const word = "abcc";

const equalFrequency = (word) => {
    const map = {};

    for (let i = 0; i < word.length; i++) {
        if (map[word[i]]) {
            map[word[i]] += 1;
        }
        else {
            map[word[i]] = 1;
        }
    }

    return map;

}

console.log(equalFrequency(word));