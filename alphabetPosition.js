/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) 

https://www.codewars.com/kata/546f922b54af40e1e90001da
*/

/**
 * Given a string, the function replaces every letter with its position in the alphabet.
 *
 * @param {string} text - The text which its letters will be replaced.
 * @returns {string} - It will return a new string which text letters are replaced with alphabet position numbers.
 */

function alphabetPosition(text) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const textArr = text.toUpperCase().split("");
  const alphabetObj = {};
  const result = [];
  for (let char of alphabet) {
    alphabetObj[char] = alphabet.indexOf(char) + 1;
  }
  for (let letter of textArr) {
    if (alphabet.includes(letter)) result.push(alphabetObj[letter]);
  }
  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// output: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

