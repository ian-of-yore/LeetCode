const words =
    ["feh", "w", "w", "lwd", "c", "s", "vk", "zwlv", "n", "w", "sw", "qrd", "w", "w", "mqe", "w", "w", "w", "gb", "w", "qy", "xs", "br", "w", "rypg", "wh", "g", "w", "w", "fh", "w", "w", "sccy"];
const s = "w";

var countPrefixes = function (words, s) {
    let count = 0;

    for (const word of words) {
        let slice = s.slice(0, word.length);
        if (word === slice) {
            count++;
        }
    }

    return count;
};

console.log(countPrefixes(words, s));