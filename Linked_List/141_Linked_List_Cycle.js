var hasCycle = function (head) {
    // traverse list twice
    // one going "twice the speed" as the other
    // if you reach an end (null) then no cycle
    // if there is a cycle, both traversals will meet
    // when they do, return true
    let first = head;
    let second = head;

    while (first && first.next) {
        first = first.next.next;
        second = second.next;

        if (first === second) return true;
    }

    return false;
};

// O(n) time because it will only take a maximum of 2 lengths
// to tell if its a cycle (if the end cycled to the beginning,
// then 'first' will catch up to 'second' at the end)