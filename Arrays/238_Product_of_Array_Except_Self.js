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

// BETTER SOLUTION: unshift is too slow, just reverse the array
// also wrote the code better, less loops, more clean

var productExceptSelf = function (nums) {
    // since a trailing product would only have a length of nums - 1,
    // we start arrays with 1 element (multiplicative unity)
    const prefix = [1];
    const suffix = [1];

    let preTotal = 1;
    let sufTotal = 1;
    // skip first element because trail is undefined there
    for (let i = 1; i < nums.length; i++) {
        preTotal *= nums[i - 1];
        prefix.push(preTotal);
        sufTotal *= nums[nums.length - i];
        suffix.push(sufTotal);
    }

    suffix.reverse();

    return nums.map((num, i) => prefix[i] * suffix[i]);
};