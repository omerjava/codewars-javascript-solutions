/* Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

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

*/

// not solved yet

function nextBigger(n) {
    let arrNums = String(n).split("");
    console.log(arrNums);
    let len = arrNums.length;
    for (let i = len - 2; i >= 0; i--) {
      if (arrNums[len - 1] > arrNums[i]) {
        let a = arrNums[len - 1];
        arrNums[len - 1] = arrNums[i];
        arrNums[i] = a;
        return Number(arrNums.join(""));
      }
      break;
    }
    return -1;
  }
  
  console.log(nextBigger(9));
  console.log(nextBigger(414));
  console.log(nextBigger(1234567908));
  console.log(nextBigger(144));