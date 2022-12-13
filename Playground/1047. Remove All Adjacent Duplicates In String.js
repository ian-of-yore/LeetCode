const s = "abbaca";

var removeDuplicates = function (s) {
    const stack = [];

    for (const char of s) {
        stack[stack.length - 1] === char ? stack.pop(char) : stack.push(char);
    }

    return stack.join('')
};

console.log(removeDuplicates(s))
