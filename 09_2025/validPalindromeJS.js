/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeJS = function(s) {
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase(); // Get rid of non-alphanumeric characters and convert to lowercase

    for (let i = 0; i < cleaned.length / 2; i++) // Only need to check half the string
    {

        if (cleaned[i] != cleaned[cleaned.length - 1 - i]) // Check characters from start and end
        {
            return false; // Not a palindrome
        }
    }

    return true; // If all checks passed, it's a palindrome
};