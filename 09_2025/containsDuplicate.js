/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        
        if (map.hasOwnProperty(nums[i])) {
            return true; 
        }
        map[nums[i]] = i;
    }
    return false;
};