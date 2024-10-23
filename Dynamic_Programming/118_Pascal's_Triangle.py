class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        def newRow(prevRow: List[int]) -> List[int]:
            output = [1]
            for i in range(len(prevRow) - 1):
                output.append(prevRow[i] + prevRow[i + 1])
            output.append(1)
            return output

        output = [[1]]
        for r in range(numRows - 1):
            output.append(newRow(output[-1]))
        return output