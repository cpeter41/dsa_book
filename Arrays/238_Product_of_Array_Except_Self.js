/**
 * @param {number[]} nums
 * @return {number[]}
 */

// BAD SOLUTION (still O(N) time, but slow)

// create prefix product array and suffix product array
// to get the product of all other elements, first take i
// then, take the prefix product of i - 1
// also take the suffix product of i + 1
// multiply the two together
// if either value doesnt exist, return the other value

var productExceptSelf = function (nums) {
    const prefix = [];
    const suffix = [];

    let total = 1;
    for (let i = 0; i < nums.length; i++) {
        total = total * nums[i];
        prefix.push(total);
    }
    total = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        total = total * nums[i];
        suffix.unshift(total);
    }

    return nums.map((num, i, arr) => {
        const prev = prefix[i - 1];
        const next = suffix[i + 1];

        if (i === 0) return next;
        else if (i === arr.length - 1) return prev;
        else return prev * next;
    });
};