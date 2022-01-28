/* Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:
Input: nums = [0]
Output: [[],[0]]
 
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique. 

https://leetcode.com/problems/subsets/
 */

function subsets(nums){
    const subsetsArr = [[]];
    let newSubset=[];
    
    for(let i=0;i<nums.length; i++){
      let lastLen=subsetsArr.length;
      //console.log(lastLen);
      for(let j=0; j<lastLen;j++){
    
         newSubset=subsetsArr[j].slice();
         newSubset.push(nums[i]);
         subsetsArr.push(newSubset);
         //console.log(newSubset);
        }
      }
    return subsetsArr;
  }
  
  console.log(subsets([1,2,3,4,5,6]));

