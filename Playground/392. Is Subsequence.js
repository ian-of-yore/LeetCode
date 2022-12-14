const s = "abc";
const t = "ahbgdc";

var isSubsequence = function (s, t) {
    let subSeq = '';
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) {
            subSeq += t[i];
            j++;
        }
    }

    return subSeq === s;
};

console.log(isSubsequence(s, t))