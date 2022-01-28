/* Convert number to reversed array of digits
        Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

        Example:
        348597 => [7,9,5,8,4,3]
        0 => [0]

        https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/

function digitize(n){
    const reversed=String(n).split("").reverse().join("");
    const numbers=reversed.split("").map(v => Number(v));
    return numbers;
}

console.log(digitize(348925));

function digitize2(n){
    const reversedDigits=String(n).split("").reverse().map(v => Number(v));
    
    return reversedDigits;
}

console.log(digitize2(348925));

function digitize3(n){
    return String(n).split("").reverse().map(v => Number(v));
}

console.log(digitize3(348925));