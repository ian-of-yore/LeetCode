const nums = [12, 345, 2, 6, 7896];

var findNumbers = function (nums) {
    let count = 0;
    for (const num of nums) {
        let str = num.toString();
        if (str.length % 2 === 0) {
            count++;
        }
    };

    return count;
}
console.log(findNumbers(nums))