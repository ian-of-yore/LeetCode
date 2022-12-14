// const boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]];
const boxTypes = [[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]];
const truckSize = 35;

var maximumUnits = function (boxTypes, truckSize) {
    const sort = boxTypes.sort((a, b) => b[1] - a[1]);

    let count = 0;
    let maxUnits = 0;


    for (const boxType of boxTypes) {
        if (count + boxType[0] <= truckSize) {
            count += boxType[0];
            maxUnits += boxType[0] * boxType[1];
        }
        else {
            let remaining = truckSize - count;
            count += remaining;
            maxUnits += remaining * boxType[1];
        }
        // if (count === truckSize) {
        //     return maxUnits;
        // }
    }

    return maxUnits
};

console.log(maximumUnits(boxTypes, truckSize));