const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = 5;

var shipWithinDays = function (weights, days) {

    const canShip = (capacity) => {
        let daysNeeded = 1;
        let currentWeights = 0;

        for (const weight of weights) {
            currentWeights += weight;

            if (currentWeights > capacity) {
                daysNeeded += 1;
                currentWeights = weight;
            }
        }

        return daysNeeded <= days;
    }

    let left = Math.max(...weights);
    let right = [...weights].reduce((a, b) => a + b);

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (canShip(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }

    return right;
};

console.log(shipWithinDays(weights, days))