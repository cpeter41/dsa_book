class Solution:
    def romanToInt(self, s: str) -> int:
        # hash map numeral to number
        map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        # count every letter as a number EXCEPT
        # for when a subtraction is used:
        # if I is before V or X then its 4 or 9
        # if X is before L or C then its 40 or 90
        # if C is before D or M then its 400 or 900

        res = 0
        for idx, letter in enumerate(s):
            if idx < len(s) - 1 and map[letter] < map[s[idx + 1]]:
                res -= map[letter]
            else:
                res += map[letter]

        return res
