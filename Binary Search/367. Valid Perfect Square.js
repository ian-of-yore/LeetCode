var isPerfectSquare = function (num) {
    let leftIndex = 1;
    let rightIndex = num;

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (midIndex * midIndex === num) {
            return true;
        }
        else if (midIndex * midIndex > num) {
            rightIndex = midIndex - 1;
        }
        else {
            leftIndex = midIndex + 1;
        }
    }
    return false;
};