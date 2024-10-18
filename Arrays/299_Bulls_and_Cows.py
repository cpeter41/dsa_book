class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        secrets = {}
        guesses = {}
        bulls = 0
        cows = 0

        for i in range(len(guess)):
            if secret[i] == guess[i]:
                bulls += 1
            else:
                if secret[i] in guesses and guesses[secret[i]] > 0:
                    cows += 1
                    guesses[secret[i]] -= 1
                else:
                    if secret[i] in secrets:
                        secrets[secret[i]] += 1
                    else:
                        secrets[secret[i]] = 1
                if guess[i] in secrets and secrets[guess[i]] > 0:
                    cows += 1
                    secrets[guess[i]] -= 1
                else:
                    if guess[i] in guesses:
                        guesses[guess[i]] += 1
                    else:
                        guesses[guess[i]] = 1
                
        print(secrets, guesses)
        return str(bulls) + "A" + str(cows) + "B"