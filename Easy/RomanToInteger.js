let input = "XIX";
let output = romanToInt(input);
console.log(output);

function romanToInt(inp) {
    let result = 0;
    for (let i = 0; i < inp.length; i++) {
        let curr = checkRoman(inp[i]);
        let next = checkRoman(inp[i + 1]);
        if (curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }
    return result;
}


function checkRoman(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    return map[s];
}