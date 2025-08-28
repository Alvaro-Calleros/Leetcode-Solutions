function isMatchEasy(s: string, p: string): boolean {
    const regex = new RegExp(`^${p}$`); // here it simply checks if the entire string matches the pattern
    return regex.test(s); // then it tests the string against the regex and thats it
};


function isMatch(s: string, p: string): boolean { // on the other hand this is more complex
    // here the const dp will be used to store the intermediate results
    const dp: boolean[][] = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));
    dp[0][0] = true;
    // we loop through the pattern
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') { // checks if the current character is '*'
            dp[0][j] = dp[0][j - 2]; // if it is, we can ignore the '*' and the preceding element
        }
    }

    for (let i = 1; i <= s.length; i++)  // here we loop through the string
        for (let j = 1; j <= p.length; j++) { // here we loop through the pattern

             // checks if the current characters match or if the pattern is a dot
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') { // checks if the current character is '*'
                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }

    return dp[s.length][p.length]; // return the final result
};