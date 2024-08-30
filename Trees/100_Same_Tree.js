/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// DFS strategy on each tree
// DFS uses a stack
// compare equality on value comparison, not left/right "future" comparisons
// push like-values to the stack at the same time, and only at the same time
    // this will ensure we are comparing the correct values
var isSameTree = function(p, q) {
    if (!p && !q) return true;

    const pStack = [p];
    const qStack = [q];

    while (pStack.length && qStack.length) {
        const pVal = pStack.pop();
        const qVal = qStack.pop();

        if (pVal?.val !== qVal?.val) return false;
        if (pVal.left?.val !== qVal.left?.val) return false;
        if (pVal.right?.val !== qVal.right?.val) return false;

        if (pVal.left && qVal.left) {
            pStack.push(pVal.left);
            qStack.push(qVal.left);
        }

        if (pVal.right && qVal.right) {
            pStack.push(pVal.right);
            qStack.push(qVal.right);
        }
    }

    return true;
};