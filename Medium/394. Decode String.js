const s = "3[a2[c]]";

var decodeString = function (s) {
    const stack = [];

    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        let subStr = '';
        let curr = stack.pop();
        while (curr !== '[') {
            subStr = curr + subStr;
            curr = stack.pop();
        };

        let num = '';
        curr = stack.pop();
        while (!Number.isNaN(Number(curr))) {
            num = curr + num;
            curr = stack.pop();
        };
        stack.push(curr);
        stack.push(subStr.repeat(Number(num)));
    }

    return stack.join('');
};

console.log(decodeString(s));