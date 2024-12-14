// sliding window
// iterate over each element
// track values as mins and maxes in queues
// min queue will have ascending vals
// max queue will have descending vals

function continuousSubarrays(nums: number[]): number {
    // store result as a number
    let res = 0;

    let left = 0;

    // min and max actually store indices, not values
    let min = [];
    let max = [];

    for (let right = 0; right < nums.length; right++) {
        // sink min down to proper spot, removing top vals
        // e.g. [1, 3, 4] <- 2 ==> [1, 2]
        while (min && nums[min[min.length - 1]] >= nums[right])
            min.pop();
        // sink max down to proper spot, removing top vals
        while (max && nums[max[max.length - 1]] <= nums[right])
            max.pop();

        // insert min and max now that old vals are removed
        min.push(right);
        max.push(right);

        // min[0] should now be the minimum of the subarray
        // max[0] is the maximum
        // by shifting left pointer we can filter out nums
        // that violate the delta 2 rule. when we end this
        // process, we have found a window that contains
        // various valid subarrays that end at the right
        // pointer r. The count of valid subarrays is therefore
        // r - l + 1. see:
        //   l   r     (l = 0, r = 2), 2 - 0 + 1 = 3
        // ([1,2,3] -> [1,2,3], [2,3], [3] aka 3 arrays)
        // we count these valid arrays and loop with r++

        // shift left pointer if min and max is above 2
        while (nums[max[0]] - nums[min[0]] > 2) {
            left++;
            if (min[0] < left) min.shift();
            if (max[0] < left) max.shift();
        };

        res += right - left + 1;
    };

    return res
};