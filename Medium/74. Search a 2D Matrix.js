const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target = 3;

var searchMatrix = function (matrix, target) {
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (arr[mid] === target) {
                return true;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return false;
    };

    for (let arr of matrix) {
        let result = binarySearch(arr, target);
        if (result == true) {
            return true;
        }
    }

    return false;
};

console.log(searchMatrix(matrix, target))



// console.log(binarySearch([1, 3, 5, 7], 6))