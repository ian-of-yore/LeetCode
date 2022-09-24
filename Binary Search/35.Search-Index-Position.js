const nums = [1, 3, 5, 6];
const target = 5;

function searchIndexPosition(inputArray, target) {
    let leftIndex = 0;
    let rightIndex = inputArray.length - 1;

    while (leftIndex < rightIndex) {
        let midIndex = Math.floor((rightIndex + leftIndex) / 2);

        if (inputArray[midIndex] === target) {
            return midIndex;
        }
        else if (inputArray[midIndex] > target) {
            rightIndex = midIndex - 1;
        }
        else {
            leftIndex = midIndex + 1;
        }
    }
    return inputArray[leftIndex] < target ? (leftIndex + 1) : leftIndex;
}

console.log(searchIndexPosition(nums, target));
