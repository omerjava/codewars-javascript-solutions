//Given a sequence of numbers, find the largest pair sum in the sequence.

const test=[90,10,14,2,23,19];

function largestPairSum(numbers)
{

  let i=0;
  const arr=[];
    let result="";

  
  for(i=0;i<numbers.length-1;i++){
      for(let j=i+1;j<numbers.length;j++){
        let k=numbers[i]+numbers[j];
        arr.push(k);
      }
  }
  
  result=Math.max(...arr);
  console.log(arr);
  console.log(result);
  return result;
}
  
largestPairSum(test);
