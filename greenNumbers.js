/* This is a very simply formulated task. Let's call an integer number N 'green'
        if N² ends with all of the digits of N. Some examples:

        5 is green, because 5² = 25 and 25 ends with 5.

        11 is not green, because 11² = 121 and 121 does not end with 11.

        376 is green, because 376² = 141376 and 141376 ends with 376.

        Your task is to write a function green that returns the nth green number, starting
        with 1 - green (1) == 1

        Input range
        n <= 5000

        https://www.codewars.com/kata/584dee06fe9c9aef810001e8/train/java
         */

// not yet solved

function get(k) {
  const greenNumbers = [1n, 5n ,6n, 25n ,76n];
   
    
  for(let i=1n; i<1000000000000n; i++) {   
    //if (greenNumbers.length=k)  {break;}
    if(i){
      if (isGreenNumber(i)) {
        greenNumbers.push(i);
      }  
    }
  }
  return greenNumbers[k - 1];
}

function isGreenNumber(num) {
   let bigNum = BigInt(num);
    const digits = String(bigNum).split("");
    const numberOfDigits = digits.length;
    const squareOfN = String(bigNum * bigNum);

    //console.log(num, squareOfN);
    if((squareOfN.substring(squareOfN.length - numberOfDigits))===(String(bigNum))) console.log(num,squareOfN);
    return squareOfN.substring(squareOfN.length - numberOfDigits) ===
      String(bigNum)
      ? true
      : false;
  }


console.log(isGreenNumber(11));
console.log(isGreenNumber(376));
console.log(isGreenNumber(76));
console.log(get(12));


/* 7109376n 50543227109376

2890625n 8355712890625

890625n 793212890625

109376n 11963109376

90625n 8212890625

9376n 87909376

625n 390625

376n 141376
*/
