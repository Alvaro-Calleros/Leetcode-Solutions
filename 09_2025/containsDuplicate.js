/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}; // we'll map each number to its index
    for (let i = 0; i < nums.length; i++) {
        
        if (map.hasOwnProperty(nums[i])) { // If anytime we find a duplicate
            return true; // we return true
        }
        map[nums[i]] = i;
    }
    return false; // if We did not find duplicate, return false
};