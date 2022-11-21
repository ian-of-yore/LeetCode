sentence = "thequickbrownxjumpsoverthelazydog";


var checkIfPangram = function (sentence) {
    return new Set(sentence).size === 26;
};

console.log(checkIfPangram(sentence));