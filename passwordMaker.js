/* One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"

https://www.codewars.com/kata/5637b03c6be7e01d99000046/train/javascript
*/

function makePassword(phrase) {
    const phraseArr = phrase.split("");
    const firstLetters = [];
    for (let i = 1; i < phraseArr.length; i++) {
      if (phraseArr[i - 1] === " " && phraseArr[i] !== " "){
         firstLetters.push(phraseArr[i]);
      }
    }
    firstLetters.unshift(phraseArr[0]);
    let strResult=firstLetters.join("");
    let result = strResult.replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5); 
    return result;
  }

  console.log(makePassword("Give me liberty or give me death"));