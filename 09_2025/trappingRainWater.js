/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) { // we need to calculate how much water we can trap
    if (!height || height.length === 0) return 0; // if no height in any bar or no bars at all, no water
     // I decided to use two pointers approach, because it doesn't matter if there is a higher bar on the left or right side, the shorter one will determine the water level
    let l = 0; // left pointer
    let r = height.length - 1; // right pointer
    let leftMax = height [l]; // left max height
    let rightMax = height [r]; // right max height
    let res = 0; // result
     // we will move the pointers towards each other until they meet

    while (l < r)
    {
        if (leftMax < rightMax) // if left max is less than right max, we can move the left pointer
        {
            l++;
            leftMax = Math.max(leftMax, height[l]); // Before checking how much water we can trap, we need to update the leftMax to avoid negative water trapping
            res += leftMax - height[l];
        } else { // same logic for the right pointer
            r--;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }
    return res; // return the result
};