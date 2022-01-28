/* This time no story, no theory. The examples below show you how to write function accum:

        Examples:
        accum("abcd") -> "A-Bb-Ccc-Dddd"
        accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        accum("cwAt") -> "C-Ww-Aaa-Tttt"

        https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

*/

function mumbling(str) {
  const strArr = str.split("");
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    result += repeat(strArr[i], i) + "-";
  }
  return result.substring(0, result.length - 1);
}

function repeat(str, num) {
  let result = str.toUpperCase();
  for (let i = 0; i < num; i++) {
    result += str.toLowerCase();
  }
  return result;
}

console.log(mumbling("helloWorld"));
