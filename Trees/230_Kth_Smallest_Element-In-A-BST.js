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
 * @param {number} k
 * @return {number}
 */

// BST, so check in-order
// left-top-right order, for all nodes
var kthSmallest = function (root, k) {
    const recur = (node) => {
        // check left side first
        if (node.left) {
            let left = recur(node.left);
            if (left !== undefined) return left;
        }

        // if no more lefts, check if we are at the kth value
        if (--k <= 0) return node.val;

        // if no more lefts and center is checked, check right
        if (node.right) {
            let right = recur(node.right);
            if (right !== undefined) return right;
        }
    };

    return recur(root);
};

// O(N) time & space complexity because we traverse a BST with no repeats and a call stack