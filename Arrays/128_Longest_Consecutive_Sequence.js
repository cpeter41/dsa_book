/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const i of set) {
        if (!set.has(i - 1)) {
            let len = 1;
            while (set.has(i + len)) {
                len++;
            }
            longest = Math.max(len, longest);
        }
    }
    return longest;
};
