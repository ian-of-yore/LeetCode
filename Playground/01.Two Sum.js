const nums = [2, 7, 11, 15];
const target = 9;

const result = [];

for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const required = target - first;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === target) {
            result.push(i);
            result.push(j);
            return;
        }
    }
}

console.log(result)