/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    {
        if (s.length !== t.length) return false; //if the lengths are not equal, they cannot be anagrams

        const cS = {}; // Counter for string s
        const cT = {}; // Counter for string t

        for (let i = 0; i < s.length; i++) //we map each character to its frequency
        {
            cS[s[i]] = (cS[s[i]] || 0) + 1;
            cT[t[i]] = (cT[t[i]] || 0) + 1;
        }

        for (const j in cS) // we compare the frequency maps
        {
            if (cS[j] !== cT[j]) return false; // if any character has different frequencies, they are not anagrams
        }
        return true; // if we didn't find any differences, they are anagrams
    }

};