class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num; 

            if (map.hasOwnProperty(complement)) { // same as in typescript, we look for the complement that targets the sum with a map
                return [map[complement], i]; 
            }
            map[num] = i;
        }
        return [];
    }
    
}
