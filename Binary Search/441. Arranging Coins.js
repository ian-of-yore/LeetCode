var arrangeCoins = function(n) {
    let i = 1;
    let levels = 0;
    while(n >= i){
        n -= i;
        levels++;
        i++;
    }
    return levels;
    
};