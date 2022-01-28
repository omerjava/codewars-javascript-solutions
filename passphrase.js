/*  Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:
    choose a text in capital letters including or not digits and non-alphabetic characters,
    shift each letter by a given number but the transformed letter must be a letter (circular shift),
    replace each digit by its complement to 9,
    keep such as non-alphabetic and non digit characters,
    downcase each letter in odd position, upcase each letter in even position (the first character
    is in position 0),
    reverse the whole result.
    Example:
      your text: "BORN IN 2015!", shift 1
      1 + 2 + 3 -> "CPSO JO 7984!"
      4 "CpSo jO 7984!"
      5 "!4897 Oj oSpC"
    With longer passphrases it's better to have a small and easy program. Would you write it?
    https://en.wikipedia.org/wiki/Passphrase

    https://www.codewars.com/kata/559536379512a64472000053/train/java
     */

function playPass(s, n) {
  const sArr = s.split("");
  const alphabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetArr = alphabetStr.split("");
  const numbers = "0123456789";
  for (let i = 0; i < sArr.length; i++) {
    if (alphabetStr.includes(sArr[i])) {
      let index = alphabetStr.indexOf(sArr[i]);
      sArr[i] = alphabetArr[(index + n) % 26];
    }
  }
  for (let i = 0; i < sArr.length; i++) {
    if (numbers.includes(sArr[i])) {
      let complementTo9 = 9 - Number(sArr[i]);
      sArr[i] = String(complementTo9);
    }
  }
  for (let i = 0; i < sArr.length; i++) {
    if (i % 2 == 0) sArr[i] = sArr[i].toUpperCase();
    else sArr[i] = sArr[i].toLowerCase();
  }
  let result = "";
  for (let i = sArr.length - 1; i >= 0; i--) {
    result += sArr[i];
  }
  return result;
}

console.log(playPass("BORN IN 2015!",27));
