const mat =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]];

const k = 3;

var kWeakestRows = function (mat, k) {
    const arr = [];
    let map = [{

    }]

    const countOne = (arr) => {
        let count = 0;
        for (const element of arr) {
            if (element === 1) {
                count++;
            }
        }
        return count;
    }

    for (let i = 0; i < mat.length; i++) {
        Object.assign(map, { i: countOne(mat[i]) })
        arr.push(countOne(mat[i]))
        map.push({ index: `i`, ones: countOne(mat[i]) })
    }

    const mapSliced = map.slice(1, map.length);
    console.log(mapSliced)



};

console.log(kWeakestRows(mat, k))