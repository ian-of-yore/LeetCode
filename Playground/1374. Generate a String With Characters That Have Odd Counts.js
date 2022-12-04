const n = 3;

var generateTheString = function (n) {
    return n % 2 === 0 ? 'a'.repeat(n - 1) + 'b' : 'a'.repeat(n)
};

console.log(generateTheString(n))