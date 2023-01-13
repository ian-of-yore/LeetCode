const numbers = [2, 7, 11, 15];
const target = 9;

var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let currentSum;

    while (left <= right) {
        currentSum = numbers[left] + numbers[right];
        if (currentSum > target) {
            right--;
        }
        else if (currentSum < target) {
            left++;
        }
        else {
            return [left + 1, right + 1]
        }
    }
};

console.log(twoSum(numbers, target))