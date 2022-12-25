const haystack = "sadbutsad";
const needle = "sad";

var strStr = function (haystack, needle) {

    for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
        const subString = haystack.slice(i, i + needle.length);
        if (subString == needle) {
            return i;
        }
    };

    
};

console.log(strStr(haystack, needle))