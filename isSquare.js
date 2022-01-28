/* A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even 
like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! 
That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

https://www.codewars.com/kata/54c27a33fb7da0db0100040e

*/

//first solution is not time-efficient for big numbers 

var isSquare = function (n) {
  let i = 0;
  const squareArr = [];
  if (Number(n) === NaN) {
    return false;
  }
  for (i = 0; i < n + 1; i++) {
    let k = i * i;
    squareArr.push(k);
  }
  if (squareArr.includes(Number(n))) {
    return true;
  }
  return false; 
};

var isSquare2 = function(n){
  if(n<0){return false;}
   if(Math.sqrt(n)%1===0){return true};
  
  return false;
}

console.log(isSquare(49));
console.log(isSquare2(49));
