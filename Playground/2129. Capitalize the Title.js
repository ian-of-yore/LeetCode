const title = "First leTTeR of EACH Word";

var capitalizeTitle = function (title) {
    let result = '';
    const words = title.split(' ');
    let count = 0;

    for (const word of words) {
        count++;
        if (word.length <= 2) {
            result += word.toLowerCase();
        }
        else {
            let first = word[0].toUpperCase();
            let rest = word.slice(1, word.length);
            result += first + rest.toLowerCase();
        }

        if (count < words.length) {
            result += ' '
        }
    }
    return result;
};

console.log(capitalizeTitle(title))