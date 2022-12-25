const s = "abab";
const p = "ab";

var findAnagrams = function (s, p) {
    const hashS = new Map();
    const hashP = new Map();
    let result = [];

    for (let i = 0; i < p.length; i++) {
        hashP[p[i]] ? hashP[p[i]] += 1 : hashP[p[i]] = 1;
        hashS[s[i]] ? hashS[s[i]] += 1 : hashS[s[i]] = 1;
    };

    const isAnagram = (obj1, obj2) => {
        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        };
        return true;
    }

    if (p.length > s.length) {
        result = [];
        return result;
    };

    if (isAnagram(hashP, hashS)) {
        result = [0];
    }

    let left = 0;
    for (let right = p.length; right < s.length; right++) {
        hashS[s[right]] ? hashS[s[right]] += 1 : hashS[s[right]] = 1;
        hashS[s[left]] -= 1;

        if (hashS[s[left]] === 0) {
            hashS.delete(s[left]);
        };
        left += 1;

        if (isAnagram(hashP, hashS)) {
            result.push(left);
        }
    };

    return result;
};

console.log(findAnagrams(s, p))