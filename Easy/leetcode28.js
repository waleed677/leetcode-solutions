

var strStr = function (haystack, needle) {
    if (needle === "") {
        return 0;
    }
    const index = haystack.indexOf(needle);
    return index;
}

let haystack = "aaaaa";
let needle = "bba";
const index = strStr(haystack, needle);
console.log(index);