const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

// Solution is not completed

var numIslands = function (grid) {
    let islands;
    if (!grid) {
        return 0;
    }

    const visited = {};
    let [rows, cols] = [grid.length, grid[0].length];



    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let arr = [r, c];
            if (grid[r][c] === "1" && visited(!visited(arr))) {
                bfs(r, c);
                islands += 1;
            }
        };

        return islands;
    }

};

console.log(numIslands(grid))