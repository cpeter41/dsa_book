/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // check original house robber algo against 2 examples
    // ex1: entire array except last element
    // ex2: entire array except first element
    // compare which one is valued more
    
    if (nums.length === 1) return nums[0];

    const partRob = (nums) => {
        let max = new Array(nums.length);
        if (nums.length === 1) return nums[0];

        max[0] = nums[0];
        max[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            max[i] = Math.max(max[i - 1], nums[i] + max[i - 2]);
        }

        return max[max.length - 1];
    };

    const first = partRob(nums.slice(0, nums.length - 1));
    const last = partRob(nums.slice(1, nums.length));

    return Math.max(first, last);
};

// O(n) time because we only traverse the list twice
// O(n) space because we create 2 max arrays