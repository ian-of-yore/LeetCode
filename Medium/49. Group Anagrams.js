const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
    const map = {};

    for (const str of strs) {
        const arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        }

        map[arr] ? map[arr].push(str) : map[arr] = [str]
    }

    return Object.values(map)
};

console.log(groupAnagrams(strs))