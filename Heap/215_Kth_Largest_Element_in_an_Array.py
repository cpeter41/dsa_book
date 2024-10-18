# doing this in python because it has a built in heap structure
# can implement either a heap class or treat an array as a heap
# both take a long time

import heapq
from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        value = None
        for i in range(len(nums) - k + 1):
            value = heapq.heappop(nums)
            print(value)

        return value
    
# technically python has a built in function that does this:
class Solution_Builtin:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[k - 1]
