const jewels = "aA";
const stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
    const jewelsSet = new Set();
    let output = 0;

    for (let i of jewels) {
        jewelsSet.add(i);
    }

    for (let i of stones) {
        if (jewelsSet.has(i)) {
            output += 1;
        }
    }

    return output;
};

console.log(numJewelsInStones(jewels, stones))