// 0 - 1 Knapsack Problem

const knapsack = (weights, values, maxWeight) => {
  const n = weights.length;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(maxWeight + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= maxWeight; j++) {
      if (weights[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i - 1] + dp[i - 1][j - weights[i - 1]]
        );
      }
    }
  }
  return dp[n][maxWeight];
};

console.log(knapsack([4, 5, 1], [1, 2, 3], 4)); // 3
console.log(knapsack([4, 5, 6], [1, 2, 3], 3)); // 0
