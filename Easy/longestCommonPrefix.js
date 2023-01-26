function longestCommonPrefix(strings) {
    if (strings.length === 0) {
      return "";
    }
  
    let prefix = strings[0];
  
    for (let i = 1; i < strings.length; i++) {
      while (strings[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
  
        if (prefix.length === 0) {
          return "";
        }
      }
    }
  
    return prefix;
  }


  const strings = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strings)); // Outputs "fl"


// let strs = ['flower', 'flow', 'flight'];
// var longestCommonPrefix = function (strs) {
//     let str = '';

//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] !== strs[j][i]) {
//                 return str;
//             }
//         }

//         str += strs[0][i];
//     }
//     console.log("Hello",str);
//     return str;

// };

