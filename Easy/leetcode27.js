
let nums = [3,2,2,3];
let val = 3;

var removeElement = function(nums, val) {
    const expectedNums = nums.filter((item) => {
       return item !== val;
   });

   if (expectedNums.length > 0) {
       nums.splice(0, nums.length - expectedNums.length);
       for (let i = 0 ; i < expectedNums.length ; i++) {
           nums[i] = expectedNums[i];
       }
   } else {
        nums.splice(0,nums.length);
   } 


        console.log(nums);
};

removeElement(nums, val);
