// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 function searchInsert(nums, target) {
     for ( let i = 0 ; i < nums.length ; i++){
         if( nums[i] >= target){
             return i;
         }
     }
    return nums.length;
};

searchInsert([1,3,5,6]])//2
