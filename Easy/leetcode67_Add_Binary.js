

let a = "11";
let b = "1";

var addBinary = function(a, b) {
    let result = "";
    let sum = 0 ;
    let carry = 0;
    let i = 0;

    while (i < a.length || i < b.length || carry != 0) {
        
        let x = 0;
        let y = 0;

            // check if ist string is not empty
        if ( i < a.length && a[a.length-1-i] !== "") {
            x = a[a.length-1-i];
        }
            // check if 2nd string is not empty 
        if ( i < b.length && b[b.length-1-i] !== "") {
            y = b[b.length-1-i];
        }

        // sum the 2 string with carry;
        sum = parseInt(x) + parseInt(y) + carry;
        // save the result  
        result = (sum % 2) + result;
        // look for carry
        carry = Math.floor(sum/2);
        i++;
        // return result;
    }
    return result;
};

const result = addBinary(a, b);
console.log(result);
