function findMedianSortedArrays(nums1: number[], nums2: number[]): number 
{
    // auxiliar function to merge two sorted arrays while maintaining sorted order
    function mergeArrays(arr1: number[], arr2: number[]): number[]
    {
        const merged: number[] = [];
        // 1 pointer per array
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) 
            {
            if (arr1[i] < arr2[j])
            {
                merged.push(arr1[i]);
                i++;
            } else
            {
                merged.push(arr2[j]);
                j++;
            }
        }

        while (i < arr1.length)
        {
            merged.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) 
        {
            merged.push(arr2[j]);
            j++;
        }

        return merged;
    }

    const merged = mergeArrays(nums1, nums2);

    // After merging, find the median
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) 
    {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else
    {
        return merged[mid];
    }
}
