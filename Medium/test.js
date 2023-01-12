const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const daysNeededToShipAllWeights = (capacity) => {
    let daysNeeded = 1;
    let currentWeights = 0;

    for (const weight of weights) {
        currentWeights += weight;

        if (currentWeights > capacity) {
            daysNeeded += 1;
            currentWeights = weight;
        }
    }

    return daysNeeded;
}

console.log(daysNeededToShipAllWeights(10))