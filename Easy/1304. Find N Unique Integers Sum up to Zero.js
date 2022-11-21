
const sumZero = (n) => {
    const result = [];

    if (n % 2 !== 0) {
        result.push(0)
    }

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i, -i);
    }
    return result;
}

const result = sumZero(7);
console.log(result);