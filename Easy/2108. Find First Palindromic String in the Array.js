var firstPalindrome = function(words) {
    function palindrome(word) {
        let result = true;
        let loopLength = Math.floor((word.length / 2));
        for (let i = 1; i <= loopLength; i++) {
            if (word[i - 1] !== word[word.length - i])
                result = false;
        }
        return result;
    }

    for(let word of words){
        if(palindrome(word)){
            return word;
        }
        else{
            return "";
        }
    }
};