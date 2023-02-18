const s = "AABABBA";
const k = 1;

var characterReplacement = function (s, k) {
    const len = s.length;
    let windowStart = 0;
    let maxLen = 0;
    let maxCount = 0;

    const charCounts = new Array(26).fill(0);

    for (let windowEnd = 0; windowEnd < len; windowEnd++) {
        const asciiCharEnd = s.charCodeAt(windowEnd) - 65;
        charCounts[asciiCharEnd]++;
        maxCount = Math.max(maxCount, charCounts[asciiCharEnd]);

        while (windowEnd - windowStart - maxCount + 1 > k) {
            const asciiCharStart = s.charCodeAt(windowStart) - 65;
            charCounts[asciiCharStart]--;
            windowStart++;
        }

        maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
    }

    return maxLen
};

console.log(characterReplacement(s, k))