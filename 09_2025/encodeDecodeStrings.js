class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for (let s of strs)
        {
            res += s.length + '#' + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;

        while (i<str.length)
        {
            j = i;
            while (j < str.length && str[j] !== '#') j++;

            const len = parseInt(str.slice(i, j));
            
            i = j + 1;
            
            res.push(str.slice(i, i + len));
            
            i += len;
        }

        return res;
    }
}
