let strs = ['flower', 'flow', 'flight'];
var longestCommonPrefix = function (strs) {
    let str = '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return str;
            }
        }

        str += strs[0][i];
    }
    return str;

};