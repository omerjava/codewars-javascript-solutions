/* A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20" 

https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
*/
function solution(list) {
  const arr = [];
  const arr2 = [];
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] - list[i + 1] !== -1) {
      arr.push(list[i]);
    } else if (
      list[i - 1] - list[i] !== -1 &&
      list[i] - list[i + 1] === -1 &&
      list[i + 1] - list[i + 2] !== -1
    ) {
      arr.push(list[i]);
    } else if (list[i - 1] - list[i] === -1 && list[i] - list[i + 1] === -1) {
      console.log("remove from list:", list[i]);
      arr.push("-");
    } else {
      arr.push(list[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr2.push(arr[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] - arr2[i + 1] <= 0 && arr2[i - 1] === undefined) {
      result.push(arr2[i]);
    } else if (arr2[i] - arr2[i + 1] <= 0 && arr2[i - 1] - arr2[i] <= 0) {
      result.push(arr2[i]);
    } else if (arr2[i] === "-") {
      let subset = [];
      subset.push(arr2[i - 1]);
      subset.push(arr2[i]);
      subset.push(arr2[i + 1]);
      let k = subset.join("");
      result.push(k);
    } else if (arr2[i - 1] - arr2[i] <= 0 && arr2[i + 1] === undefined) {
      result.push(arr2[i]);
    }
  }

  console.log(arr2);
  return result.join(",");
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 22,
  ])
);


/*

// my first try below :) when it become so messy, I start from zero and solved as above
function solution(list){
  const arr1=[];
  const aloneNumArr=[];
  const arr2=[];
  const arr3=[];
  const arr4=[];
  let arr5=[];
  let arr6=[];
  for(let i=0; i<list.length;i++){
     if((list[i]-list[i+1]===-1) && (list[i]-list[i+2]===-2)){
         arr1.push(list[i]);
         arr1.push(list[i+1]);
         arr1.push(list[i+2]);
     }
  }  
  for(let i=0;i<list.length;i++){
      if(!arr1.includes(list[i])){
          aloneNumArr.push(list[i]);
      }
  } 
  console.log(arr1);
  console.log(aloneNumArr);

  for(let i=0; i<arr1.length; i++){
     if(arr1.indexOf(arr1[i])===arr1.lastIndexOf(arr1[i])){
         arr2.push(arr1[i]);
     }
 }
 console.log(arr2);
 for(let i=0;i<arr2.length;i++){
     if(!((arr2[i]-arr2[i-1]===1)&&(arr2[i]-arr2[i+1]===-1))){
         arr3.push(arr2[i]);
     }
 }
     console.log(arr3);
     arr6=aloneNumArr.concat(arr3);
     arr6.sort(function(a, b){return b-a});
     arr6.reverse();
 for(let i=0; i<arr6.length; i+=2){
     if(!arr3.includes(arr6[i])){
         arr4.push(arr6[i]);
         arr4.push(",");
     }
     else if((arr3.includes(arr6[i]))&&(!arr4.includes(arr6[i]))/*&&(arr3.includes(arr6[i+1]))*/ /*){
         
         arr4.push(arr6[i]);
         arr4.push("-");
         arr4.push(arr6[i+1]);
         //arr4.push(",");
     }
     else if((arr3.includes(arr6[i])&&(arr4.includes(arr6[i])))){
         
        
         arr4.push(",");
        
         //arr4.push(",");
     }
 }
     arr4.pop();
     console.log(arr4);
     let str=arr4.join("");
     console.log(str);
     arr5=str.split(" ");
     console.log(arr5);

     
     return arr6;

} */

