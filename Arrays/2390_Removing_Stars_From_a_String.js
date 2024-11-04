/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    // this solution "works" but is too slow
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == '*') {
    //         s = `${s.slice(0, i - 1)}${s.slice(i + 1)}`
    //         i -= 2;
    //     }
    // }
    // return s

    // this solution rebuilds the string char by char
    // if the char is a '*', then we remove the last
    // char in the stack since it's the char to left of the *
    let stack = [];

    s.split('').forEach(char => {
        if (char === '*') stack.pop();
        else stack.push(char);
    });

    return stack.join('');
};