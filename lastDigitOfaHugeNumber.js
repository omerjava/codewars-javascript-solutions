/* For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g.,

lastDigit([3, 4, 2]) === 1
because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

This kata generalizes Last digit of a large number; you may find useful to solve it beforehand. */

// function works well given small number as parameter but when number for power grows it can't calculate.
// not yet solved

function lastDigit(arr){
    let num =BigInt(arr[0])**BigInt(arr[1])**BigInt(arr[2]);
    console.log(num);
    let result=num%10n;
  
    return Number(result); 
  }
  
  console.log(lastDigit([3,4,12]));