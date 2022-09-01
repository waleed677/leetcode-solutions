// Hello Everyone I hope you are doing well
// Today we are going to solve one of the easiest problem of Leet Code which is TwoSums in ASMR Style

// Problem Statement is

//  Given an array of integers nums and an integer target, return the index of the two numbers such that they add up to target.
// For Example let nums = [2,7,11,15] and target = 9 so output should be [0,1] because nums[0] + nums[1]  == 9 so lets solve this problem in Javascript


let nums = [3,3];
let target = 6;

function twoSums(nums,target){
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            if(nums[i] + nums[j] === target ) return [i,j]
        }
    }
}

let result = twoSums(nums,target);
console.log(result);

//  As you can see in the terminal section its returning the correct output lets try two more examples