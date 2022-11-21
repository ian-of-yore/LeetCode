const gain = [-4, -3, -2, -1, 4, 3, 2]

var largestAltitude = function (gain) {
    const altitudes = [0];
    let highestAlt = 0;

    for (let i = 0; i < gain.length; i++) {
        let previousAlt = altitudes[altitudes.length - 1];
        let newElement = previousAlt + gain[i];
        if (newElement > highestAlt) {
            highestAlt = newElement;
        }
        altitudes.push(newElement);
    }

    return Math.max(...altitudes);
};

console.log(largestAltitude(gain))

