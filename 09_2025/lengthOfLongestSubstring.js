/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let a = 0;
        let b = 0;
        let max = 0;
        const hset = new Set();

        while (b < s.length)
        {
            if (!hset.has(s.charAt(b)))
            {
                hset.add(s.charAt(b));
                max = Math.max(hset.size, max);
                b++;
            } else {
                hset.delete(s.charAt(a));
                a++;
            }
        }
        return max;
    }