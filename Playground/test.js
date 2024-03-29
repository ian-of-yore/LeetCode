// const word1 = "aaaa";
// const word2 = "bccb";

const word1 = "abcdeef";
const word2 = "abaaacc";

// const word1 = "aaaab";
// const word2 = "zzzza";

var checkAlmostEquivalent = function(word1, word2) {
    const hm = new Map()
    const addToHm = (ch, add) => {
        if (hm.has(ch)) 
            hm.set(ch, hm.get(ch) + (add ? +1 : -1))
        else 
            hm.set(ch, (add ? +1 : -1))  
    }
    
    for (let i = 0; i < word1.length; i++) {
        addToHm(word1[i], true) 
        addToHm(word2[i], false) 
    }
    
    for (const val of hm.values())
        if (Math.abs(val) > 3)
			return false
    
    return true
};

console.log(checkAlmostEquivalent(word1, word2))