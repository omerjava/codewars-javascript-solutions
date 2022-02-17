/* Write a function that takes a positive integer and returns the next smaller positive integer 
containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1  when there is no smaller number that contains the same digits. Also return -1 when the next 
smaller number with the same digits would require the leading digit to be zero.

https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript
*/

function nextSmaller(num) {
    const digitsSorted = String(num).split("").sort().join("");
    if(String(num)===digitsSorted) return -1;
    let len = (10**(digitsSorted.length-1))-1;
    for(let i=num-1; i>len; i--){
        if(String(i).split("").sort().join("") === digitsSorted) return i;
    }
    return -1;
}

console.log(nextSmaller(3744535383));
console.log(nextSmaller(123456789));
console.log(nextSmaller(531));
console.log(nextSmaller(2071));