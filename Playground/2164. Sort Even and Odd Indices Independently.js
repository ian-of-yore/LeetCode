// const nums = [4, 1, 2, 3];
const nums = [5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21];

var sortEvenOdd = function (nums) {
    const oddArr = [];
    const evenArr = [];
    const finalArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenArr.push(nums[i]);
        }
        else {
            oddArr.push(nums[i])
        }
    }

    const oddSorted = oddArr.sort((a, b) => b - a);
    const evenSorted = evenArr.sort((a, b) => a - b);

    for (let i = 0; i < oddArr.length; i++) {
        finalArr.push(evenSorted[i]);
        finalArr.push(oddSorted[i]);
    }

    if (evenSorted.length > oddSorted.length) {
        finalArr.push(evenSorted[evenSorted.length - 1])
    }

    return finalArr
};

console.log(sortEvenOdd(nums))