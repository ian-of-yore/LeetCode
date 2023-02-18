const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];

var islandPerimeter = function (grid) {
    let hash = {};

    const dfs = (i, j) => {
        let arr = [i, j];
        if (hash[arr]) {
            return 0;
        }

        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 0) {
            return 1;
        }

        hash[arr] = true;
        let perimeter = dfs(i, j + 1);
        perimeter += dfs(i, j - 1);
        perimeter += dfs(i + 1, j);
        perimeter += dfs(i - 1, j);

        return perimeter;
    };


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return dfs(i, j)
            }
        }
    }
};

console.log(islandPerimeter(grid))