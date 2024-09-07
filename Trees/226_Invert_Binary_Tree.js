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
 * @return {TreeNode}
 */

// recursively switch left and right branches of every node
var invertTree = function(root) {
    const swapBranches = (node) => {
        if (!node) return null;
        [node.left, node.right] = [node.right, node.left];
        if (node.left) swapBranches(node.left);
        if (node.right) swapBranches(node.right);

        return node;
    };

    return swapBranches(root);
};