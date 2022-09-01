

let s = "   fly me   to   the moon  ";

var lengthOfLastWord = function(s) {
    
    // if empty string return
    if(s === "") return;

    // trim the whitespace and split the string into array
    const arr = s.trim().split(" ");
    console.log({arr});
    const word = arr[arr.length-1];
    return word.length;

};


const length = lengthOfLastWord(s);
console.log(length);