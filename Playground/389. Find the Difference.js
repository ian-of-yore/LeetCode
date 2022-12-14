const s = "abdc";
const t = "abcde";

var findTheDifference = function (s, t) {
    // const sortS = s.split('').sort();
    // const sortT = t.split('').sort();

    // for (let i = 0; i < t.length; i++) {
    //     if (sortS[i] !== sortT[i]) {
    //         return sortT[i]
    //     }
    // }

    // Using JavaScript object 
    const map = {};
    for (const letter of s) {
        map[letter] = map[letter] + 1 || 1;
    }

    for (const letter of t) {
        if (!map[letter]) {
            return letter;
        }
        map[letter]--;
    }
};

console.log(findTheDifference(s, t));