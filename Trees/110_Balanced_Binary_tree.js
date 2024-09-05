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
 * @return {boolean}
 */
var isBalanced = function(root) {

    // recursively gets the height (farthest branch) from any node
    /**
    * input TreeNode
    * output [boolean, integer]
    *   boolean is if balanced, int is the height
     */
    const height = (node) => {
        // end of branch condition
        if (!node) return [true, 0];

        // get each branch's height and if those 2 
        // nodes are balanced trees themselves
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        let bal = false;
        // don't bother comparing height if either subtree is imbalanced
        if (leftHeight[0] && rightHeight[0]) {
            bal = Math.abs(leftHeight[1] - rightHeight[1]) <= 1;
        }

        // add 1 to height to account for this current node!
        return [bal, 1 + Math.max(leftHeight[1], rightHeight[1])]
    }

    return height(root)[0];
};

// O(n) time because we never revisit any nodes
// also O(n) space complexity due to the callstack varying based on input height