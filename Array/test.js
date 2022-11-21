let num = [4, 2, 5, 7];
let result = [];
let even = 0;
let odd = 1;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        result[even] = num[i];
        even += 2;
    }
    else {
        result[odd] = num[i];
        odd += 2;
    }
}

console.log("result", result)