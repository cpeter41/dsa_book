/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// utilize dfs (a stack) and compare right lengths to left lengths for each node
// return the higher height, use function recursively
var maxDepth = function(root) {
    // recursive function
    const getDepth = (node) => {
        // end condition
        if (!node) return 0;

        // get left and right heights to compare
        const left = getDepth(node.left);
        const right = getDepth(node.right);

        // add 1 to max height to account for current node
        return 1 + Math.max(left, right);
    }

    return getDepth(root);
};