var firstPalindrome = function (words) {

    // A function which checks if a single word is palindrome or not
    function palindrome(word) {
        let wordLower = word.toLowerCase();
        let result = true;
        let loopLength = Math.floor((wordLower.length / 2));
        for (let i = 1; i <= loopLength; i++) {
            if (wordLower[i - 1] !== wordLower[wordLower.length - i])
                result = false;
        }
        return result;
    }

    // Loop thorugh each words of the given array applying the created function
    // While checking the elements of the array, if the program finds a palindrome word, it breaks 
    // the program and returns that word. No need to go through all the elements as only the first
    // word is required.

    for (let word of words) {
        if (palindrome(word)) {
            return word;
        }
    }
    return "";
};