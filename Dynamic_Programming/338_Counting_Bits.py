class Solution:
    def countBits(self, n: int) -> List[int]:
        # notice that any even number will have the same
        # number of 1s in binary as its half.
        # furthermore, an odd number has 1 more 1 than
        # its half. theoretically we've already calculated 
        # each num's half's 1s, so we use those

        output = [0]
        
        for i in range(1, n + 1):
            isOdd = i % 2
            output.append(output[i // 2] + isOdd)

        return output
