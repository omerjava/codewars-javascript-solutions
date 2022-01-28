/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of 
the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; otherwise rotate it to the left by one position. Put together these modified 
chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561". 
https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
*/

function revrot(str, sz) { 
    if(sz===0) return "";
    if(sz>str.length) return "";
    const chunks=[];
    let chunk="";
    for(let i=0; i<str.length; i=i+sz){
        chunk=str.substring(i,sz+i);
        if(chunk.length<sz) break;
        chunks.push(chunk);
    }
    const result=[];
    for(let i=0; i<chunks.length; i++){
        if(isSumOfCubesOfDigitsDivisibleBy2(chunks[i])===true) result.push(reverse(chunks[i]));
        else result.push(rotate(chunks[i]));
    }
    return result.join(""); 
}
const reverse = stringRev => stringRev.split("").reverse().join("");

const rotate = function(stringRot){
        const digits=stringRot.split("");
        const rotatedDigits=[];
        for(let i=1; i<digits.length;i++){
            rotatedDigits.push(digits[i]);
        }
        rotatedDigits.push(digits[0]);
        return rotatedDigits.join("");
    }

const isSumOfCubesOfDigitsDivisibleBy2=function(stringChunk){
        const digits=stringChunk.split("");
        let sum=0;
        for(let digit of digits){
            sum+=Number(digit)**3;
        }
        if(sum%2===0) return true;
}

console.log(revrot("563000655734469485", 4));




