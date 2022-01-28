/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be 
rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False 

https://www.codewars.com/kata/55c04b4cc56a697bb0000048
*/

function scramble(str1, str2) {
    const charStr1={};
    const charStr2={};
    let counter=0;
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (charStr1[char]>=1) {
            charStr1[char]++;
        } 
        else {
            charStr1[char] = 1;
        }
      }
      for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (charStr2[char]>=1) {
            charStr2[char]++;
        } else {
            charStr2[char] = 1;
        }
      }
      for(let x in charStr2){
        charStr2[x]<=charStr1[x]?counter++:false;
        console.log(charStr2[x]);
        console.log(charStr1[x]);
      }
      console.log(charStr1);
      console.log(charStr2);
      return counter===Object.keys(charStr2).length?true:false;
}

console.log(scramble("hgjgjaaaagbjabgj", "aabbaa"));



