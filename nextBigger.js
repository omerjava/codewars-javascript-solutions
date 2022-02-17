/* Create a function that takes a positive integer and returns the next bigger number 
that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil 

https://www.codewars.com/kata/55983863da40caa2c900004e
*/

function nextBigger(number) {
    const digits=String(number).split("").map(v=>Number(v));
    let sortedNumber=String(digits.sort());
    for(let i=number+1;i<10**digits.length; i++){    // 10**digits.length, if the number is 4 digits, the next bigger number cannot be 5 digits
      if(String(String(i).split("").map(v=>Number(v)).sort())===sortedNumber) return i;
    }
    return -1;
}

console.log(nextBigger(9));
console.log(nextBigger(414));
console.log(nextBigger(3210));
console.log(nextBigger(35464216));

