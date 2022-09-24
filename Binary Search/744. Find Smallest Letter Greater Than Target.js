let letters = ["c", "f", "j", "k", "o", "t", "w"];
let target = "g";

var nextGreatestLetter = function (letters, target) {
    let leftIndex = 0;
    let rightIndex = letters.length - 1;
    if (letters[rightIndex] <= target) {
        return letters[0];
    }
    else {
        while (leftIndex <= rightIndex) {
            let midIndex = Math.floor((rightIndex + leftIndex) / 2);
            console.log("midIndex", letters[midIndex]);

            // target is smaller or equal to mid
            if (letters[midIndex] <= target) {
                leftIndex = midIndex + 1;
                console.log("leftIndex", letters[leftIndex]);
            }

            // target is bigger than mid
            else {
                rightIndex = midIndex - 1;
                console.log("rightIndex", letters[rightIndex]);
            }
        }
        return letters[leftIndex];
    }
};

let ans = nextGreatestLetter(letters, target);
console.log(ans);