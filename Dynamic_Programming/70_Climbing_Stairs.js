/**
 * @param {number} n
 * @return {number}
 */

// think of a tree with 0 at root
// each branch is node + 1 and node + 2 (since we can only take steps of 1 and 2)
// each identical node value has the same tree structure, so we dont have to count them all
// 

var climbStairs = function (n) {
    // this is just the fibonacci sequence
    const ways = new Array(n + 1);
    ways[n] = 1;        // last value
    ways[n - 1] = 1;    // 2nd to last value
    // iterate to assemble sequence of available paths
    // since we start at the end, the first 2 values only have 1 possible path towards the top
        // e.g. n = 5, if we count our tree paths, 5 has 1 path towards 5. 4 has one path towards 5.
        // so, if we are on 3, its 2 paths are 4 and 5, which both have 1 path each. 3 then has 2 paths.
    for (let i = n - 2; i >= 0; i--) {
        ways[i] = ways[i + 1] + ways[i + 2];
    }
    return ways[0];     // first value in array will be the sum of the 2nd and 3rd values
};

// O(N) time because the for loop linearly scales with n
// O(N) space because the 'ways' array linearly scales with n