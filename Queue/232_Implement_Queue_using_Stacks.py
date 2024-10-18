# add items to push_stack when items are pushed
# transfer all items from push_stack to pop_stack when popped
# transferring between either stack will reverse the order of the items provided
# transfer all items from pop_stack to push_stack when pushed
# transfers keep track of the order of the queue
# you can think of each stack being "halves" of the entire queue, with changing sizes

class MyQueue:
    def __init__(self):
        self.push_stack = []
        self.pop_stack = []

    def push(self, x: int) -> None:
        while self.pop_stack:
            self.push_stack.append(self.pop_stack.pop())

        self.push_stack.append(x)

    def pop(self) -> int:
        while self.push_stack:
            self.pop_stack.append(self.push_stack.pop())

        return self.pop_stack.pop()

    def peek(self) -> int:
        # same operation as pop, but dont actually pop
        while self.push_stack:
            self.pop_stack.append(self.push_stack.pop())

        return self.pop_stack[-1]

    def empty(self) -> bool:
        # if both stacks are empty, then there is no half of the queue
        return not self.push_stack and not self.pop_stack