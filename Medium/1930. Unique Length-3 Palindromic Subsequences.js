// solution incomplete

const s = "aabca";

var countPalindromicSubsequence = function (s) {
    var firstSeen = {}
    var lastSeen = {}
    var res = 0
    var marked = new Set();
    for (let i = 0; i < s.length; i++) {
        if (firstSeen[s[i]] == undefined) firstSeen[s[i]] = i
        lastSeen[s[i]] = i
    }

};

console.log(countPalindromicSubsequence(s))