/* Write a function named first_non_repeating_letter that takes a string input, and returns the first 
character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only 
occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the 
function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- 
see sample tests. 

https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
*/


function firstNonRepeatingLetter(s) {
    
    let wordArr=s.toLowerCase().split("");
    let result="";
    
    for(let i=0;i<wordArr.length;i++){
        if(wordArr.indexOf(wordArr[i])===wordArr.lastIndexOf(wordArr[i])){
            result=s[i];
            break;
        }
    }
    return result;

  }
  
  console.log(firstNonRepeatingLetter("sTreS"));

  function firstNonRepeatingLetter2(s) {
    let k=s.toLowerCase();
    let result="";
    
    for(let i=0;i<k.length;i++){
        if(k.indexOf(k[i])===k.lastIndexOf(k[i])){
            result=s[i];
            break;
        }
    }
    return result;

  }
  
  console.log(firstNonRepeatingLetter2("sTreS"));


  function firstNonRepeatingLetter3(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }

  console.log(firstNonRepeatingLetter3("sTrRetdfeS"));
  