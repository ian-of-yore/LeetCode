const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];

var destCity = function (paths) {
    const pathsSet = new Set();
    for (const path of paths) {
        pathsSet.add(path[0]);
    }

    for (const path of paths) {
        if (!pathsSet.has(path[1])) {
            return path[1];
        }
    }

};

console.log(destCity(paths))