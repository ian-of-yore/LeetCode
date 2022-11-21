const prices = [7, 6, 4, 3, 1];

const maxProfit = (prices) => {
    let buy = 0;
    let sell = 1;
    let max_profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[sell] > prices[buy]) {
            let currentProfit = prices[sell] - prices[buy];
            max_profit = Math.max(currentProfit, max_profit);
        }
        else {
            buy = sell;
        }
        sell++;
    }
    return max_profit
}

const result = maxProfit(prices);
console.log(result);