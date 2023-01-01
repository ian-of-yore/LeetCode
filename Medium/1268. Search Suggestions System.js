const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

var suggestedProducts = function (products, searchWord) {
    const sorted = products.sort();
    const result = [];
    let left = 0;
    let right = sorted.length - 1;

    for (let i = 0; i < searchWord.length; i++) {
        let char = searchWord[i];
        while ((left <= right) && ((sorted[left].length <= i) || (sorted[left][i] !== char))) {
            left++;
        }
        while ((left <= right) && ((sorted[right].length <= i) || (sorted[right][i] !== char))) {
            right--;
        }

        result.push([]);
        let remaining = right - left + 1;
        for (let j = 0; j < Math.min(3, remaining); j++) {
            result[result.length - 1].push(sorted[left + j])
        }
    }

    return result;

};

console.log(suggestedProducts(products, searchWord))