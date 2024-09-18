// NOTE: this solution takes too long, times out longer inputs

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = [];

    while (strs.length) {
        const partResult = [];
        // gets and alphabetizes a single str in strs
        const curr = strs.pop();
        // console.log("arr: ", strs, "checking with ", curr);

        partResult.push(curr);
        const currSorted = curr.split('').sort().join('');

        for (let i = 0; i < strs.length; i++) {
            const compSorted = strs[i].split('').sort().join('');
            // console.log(strs[i], "length:", strs.length);

            if (currSorted === compSorted) {
                // console.log(strs[i], "works!")
                partResult.push(strs.splice(i, 1)[0]);
                i--;
            }
        }

        result.push(partResult);
    }

    return result;
};

// Better Solution

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // storing anagrams in key value pairs
    // if we sort words, we can get unique anagram keys
    const result = {};

    while (strs.length) {
        const curr = strs.pop()
        const currSorted = curr.split('').sort().join('');

        // if our result is found, add our new word to the array
        if (result[currSorted]) result[currSorted].push(curr);
        // else create a new partition of the result
        else result[currSorted] = [curr];
    }

    // ignore keys, return an array of arrays of strs
    return Object.values(result);
};

// O(N * M) time, n = number of strs, m = avg length of str
// O(N) space