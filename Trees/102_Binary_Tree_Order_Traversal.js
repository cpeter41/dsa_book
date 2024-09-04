// My initial solution NOTE: SLOW AND BAD
var levelOrder = function (root) {
    const res = [];
    let queue = [root];
    let nextQueue = [];
    let currentLevel = [];

    // set any subsequent values for response
    while (queue.length) {
        const val = queue.shift();

        if (val) currentLevel.push(val.val);
        if (val?.left) nextQueue.push(val.left);
        if (val?.right) nextQueue.push(val.right);

        if (!queue.length) {
            queue = nextQueue;
            if (currentLevel.length) res.push(currentLevel);
            currentLevel = [];
            nextQueue = [];
        }
    }

    return res;
};

// 2nd attempt NOTE: MUCH BETTER
var levelOrder = function (root) {
    const res = [];
    const queue = [root];

    // set any subsequent values for response
    while (queue.length) {
        const currentLevel = []; // tracks the values for a single particular level
        const saveLength = queue.length;    // save original length of queue

        // assemble the level response while adding more to the queue
        // at loop start, we start a new subarray (a new tree level)
        for (i = 0; i < saveLength; i++) {
            const node = queue.shift(); // this is why we save og queue length
            if (node) {
                currentLevel.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        // if we have built any values at this level,
        // then push the finished subarray to the result
        if (currentLevel.length) res.push(currentLevel);
    }

    return res;
};

/**
 * O(n) time because we never revisit nodes
 * O(n) space because the queue can never be larger than the amount of tree nodes
 */