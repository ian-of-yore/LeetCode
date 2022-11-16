const accounts = [[1, 2, 3], [3, 2, 1]];

const maxWealth = (money) => {
    const array = [];
    for (let i = 0; i < money.length; i++) {
        array.push(money[i].reduce((a, b) => a + b));
    }
    return Math.max(...array);
}

const result = maxWealth(accounts);
console.log(result);
