/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0; // Variable to keep track of the longest sequence found
    let curr = 1; // Current sequence length
    const numSet = new Set(nums); // Using a set for O(1) lookups

    // Iterate through each number in the set
    for (let n of numSet)
    {
        if (!numSet.has(n -1)) // Only start counting if 'n' is the start of a sequence, it means 'n-1' is not in the set
        {
            let length = 1; // Start with a sequence length of 1 (the number itself)
            while (numSet.has(n + length)) // Check for consecutive numbers (n+1, n+2, ...)
            {
                length++;
            }
            longest = Math.max(longest, length); // Update longest if the current sequence is longer
        }
    }
    return longest; // Return the length of the longest consecutive sequence found
};