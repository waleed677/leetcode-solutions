
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
    // first join the digits with no space and add 1  
    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    // convert the num into array
    num = num.toString().split('').map((num) => parseInt(num));
    return num;
};

let result = plusOne(digits);
console.log({result});