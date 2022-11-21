const names = ["Alice", "Bob", "Bob"];
const heights = [155, 185, 150];

var sortPeople = function (names, heights) {
    let arr = [];

    for (let i = 0; i < names.length; i++) {
        arr.push({ name: names[i], height: heights[i] })
    }

    const arrSorted = arr.sort((a, b) => b.height - a.height);
    return arrSorted.map(i => i.name);
};

console.log(sortPeople(names, heights));