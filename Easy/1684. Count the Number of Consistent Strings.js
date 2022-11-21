const allowed = "cad";
const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];


var countConsistentStrings = function (allowed, words) {
    const allwedSet = new Set(allowed);

    const consitent = words.filter(word => {
        return word.split('').every(char => allwedSet.has(char));
    })

    return consitent.length;

};

console.log(countConsistentStrings(allowed, words))





