const points = [[1, 1], [3, 4], [-1, 0]];

var minTimeToVisitAllPoints = function (points) {
    let result = 0;
    for (let i = 1; i < points.length; ++i) {
        const prev = points[i - 1];
        const next = points[i];

        let diffat0 = Math.abs(next[0] - prev[0]);
        let diffat1 = Math.abs(next[1] - prev[1])

        result += Math.max(diffat0, diffat1);
    }
    return result;
};

console.log(minTimeToVisitAllPoints(points));