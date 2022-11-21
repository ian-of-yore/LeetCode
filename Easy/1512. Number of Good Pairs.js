const nums = [1, 2, 3, 1, 1, 3];

const numIdenticalPairs = (nums) => {
    const map = {};
    let count = 0;

    for (number of nums) {
        if (map[number]) {
            count += map[number];
            console.log(number, count);
            map[number] += 1;
        }
        else {
            map[number] = 1;
        }
    }

    return count;
}

console.log(numIdenticalPairs(nums));