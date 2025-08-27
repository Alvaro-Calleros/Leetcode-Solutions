
function maxCollectedFruits(fruits: number[][]): number {
    const n = fruits.length - 1;
    let k1 = fruits[0][0], k2 = fruits[n][0], k3 = fruits[0][n];

    for(let i = 1; i < n; i++)
    {
        k1 += fruits [i][i];
    }

    for(let i = 1; i < n-2; i++)
    {
        fruits[n][i]>=fruits[n-1][i]? k2 += fruits [n][i]: k2 += fruits [n-1][i];
    }

    k2+= fruits[n][n-1];

    for(let i = 1; i < n-2; i++)
    {
        fruits[i][n]>=fruits[i][n-1] ? k3 += fruits [n][i]: k3 += fruits [n-1][i];
    }

    k3+= fruits[n-1][n];

    const total = k1 + k2 + k3;
    return total;
};