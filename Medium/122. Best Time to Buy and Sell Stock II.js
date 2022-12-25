const prices = [1, 2, 3, 4, 5];
// const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
    let left = 0, right = 1, result = 0;;

    for (let i = 0; i < prices.length - 1; i++) {
        let profit = prices[right] - prices[left];
        if (profit > 0) {
            result += profit;
        }
        left++;
        right++;
    }

    return result
};

console.log(maxProfit(prices));