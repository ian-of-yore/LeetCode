const piles = [3, 6, 7, 11];
const h = 8;

var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / middle);
        }
        if (hours <= h) {
            result = Math.min(result, middle)
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }

    return result;
};

console.log(minEatingSpeed(piles, h))