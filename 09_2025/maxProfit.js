class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let min_buy = prices[0];
    let max_profit = 0;
    for (let i = 1; i < prices.length; i++)
    {
        if (prices[i] < min_buy)
        {
            min_buy = prices[i];
        }
        if ((prices[i]-min_buy) > max_profit)
        {
            max_profit = prices[i] - min_buy;
        }
    }
    return max_profit;
    }
}
