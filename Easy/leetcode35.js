

var searchInput = function( nums, target) {
    let index = nums.indexOf(target);
    if (index === -1) {
        // return the index where it would be if were sorted array
        nums.push(target);
        nums.sort(function(a , b) { return a - b});
        console.log(nums);
        index = nums.indexOf(target);
    }
    return index;
}

let nums = [3,5,7,9,10];
let target = 8;

const index = searchInput(nums, target);
console.log(index);