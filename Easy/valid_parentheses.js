let s = "((";
let bracket = '';
var isValid = function (s) {
    let stack = [];
    let matchArr = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    if (s.length <= 1) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
            let bracket = stack.pop();
            if (matchArr[bracket] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length ? 0 : 1;
};