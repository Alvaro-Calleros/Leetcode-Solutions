/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    {
        if (s.length !== t.length) return false;

        const cS = {};
        const cT = {};

        for (let i = 0; i < s.length; i++)
        {
            cS[s[i]] = (cS[s[i]] || 0) + 1;
            cT[t[i]] = (cT[t[i]] || 0) + 1;
        }

        for (const j in cS)
        {
            if (cS[j] !== cT[j]) return false;
        }
        return true;
    }

};