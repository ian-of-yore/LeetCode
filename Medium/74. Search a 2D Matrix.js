const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
// const matrix = [[1]];
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


    let topRow = 0; botRow = matrix.length - 1;
    let row = null;
    while (topRow <= botRow) {
        let midRow = Math.floor(topRow + (botRow - topRow) / 2);

        if (
            target >= matrix[midRow][0] &&
            target <= matrix[midRow][matrix[midRow].length - 1]
        ) {
            row = midRow;
            break;
        }
        else if (target > matrix[midRow][0]) {
            topRow = midRow + 1;
        }
        else {
            botRow = midRow - 1
        }
    }

    if (row === null) {
        return false;
    }

    return binarySearch(matrix[row], target)

};

console.log(searchMatrix(matrix, target))



// console.log(binarySearch([1, 3, 5, 7], 6))