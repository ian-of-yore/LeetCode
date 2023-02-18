const s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let left = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[i]);
        result = Math.max(result, (i - left) + 1)
    }

    return result;
};

console.log(lengthOfLongestSubstring(s))