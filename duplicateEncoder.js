/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("   

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
*/

function duplicateEncode(str) {
  const characters = {};

  let strLower = str.toLowerCase();

  for (let i = 0; i < strLower.length; i++) {
    let char = strLower[i];

    if (characters[char]) {
      characters[char]++;
    } else {
      characters[char] = 1;
    }
  }
  console.log(characters);
  let newString = [];
  for (let i = 0; i < strLower.length; i++) {
    let char = strLower[i];

    if (characters[char] === 1) {
        newString.push("(");
    } else {
        newString.push(")");
    }
  }

  return newString.join("");
}

console.log(duplicateEncode("Hello World")); 


// not working perfect due to special regex characters
function duplicateEncode2(str) {
    const newStr=[];
    for(let i=0;i<str.length;i++){
        const pattern = new RegExp(str[i],"gi");
        let result = str.match(pattern);
        if(result.length===1){
            newStr.push("(");
        }
        else{
            newStr.push(")");
        }
    }
    return newStr.join("");
}

console.log(duplicateEncode2("h34212hetrreke")); 
console.log(duplicateEncode2("<<r343eke")); 
console.log(duplicateEncode2("he22145re//,@ke")); 
