const alphabet = "abcdefghijklmnopqrstuvwxyz";
const key = "the quick brown fox jumps over the lazy dog";
message = "vkbs bs t suepuv"

var decodeMessage = function (key, message) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';
    key = Array.from(new Set(key.split(' ').join('')))

    const map = {};
    for (let i = 0; i < key.length; i++) {
        if (!map[key[i]]) {
            map[key[i]] = alphabet[i]
        }
    }

    for (let i = 0; i < message.length; i++) {
        if (map[message[i]]) {
            result += map[message[i]]
        }
        else {
            result += ' '
        }
    }

    return result;

};

console.log(decodeMessage(key, message));