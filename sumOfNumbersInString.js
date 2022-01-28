/* Your task in this kata is to implement a function that calculates the sum of the integers inside a string.
 For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers
  is 3635.

Note: only positive integers will be tested. 

https://www.codewars.com/kata/598f76a44f613e0e0b000026
*/

function sumOfIntegersInString(s){
    const numStr="0123456789";
    const digits=[];
    for(let i=0; i<s.length;i++){
        if(s[i]===s[s.length-1] && numStr.includes(s[i])){
            digits.push(s[i], "a");
            break;
        }
        if(numStr.includes(s[i]) && numStr.includes(s[i+1])){
            digits.push(s[i]);
        }
        else if(numStr.includes(s[i]) && !numStr.includes(s[i+1])){
            digits.push(s[i],s[i+1]);
        }
      }
      //console.log(digits);
      const numbers=[];
      let concat="";
      for(let i=0; i<digits.length; i++){
        concat=concat+digits[i];
        if(!numStr.includes(digits[i])){
            numbers.push(concat);
            concat="";
        }
      }
      //console.log(numbers);
      const lastNum=[];
      for(let i=0; i<numbers.length; i++){
         let k= numbers[i].split("");
         k.pop();
         let m = k.join("");
         lastNum.push(Number(m));
      }
      //console.log(lastNum);
      let result=0;
      for(const n of lastNum){
          result+=n;
      }
      
    return result;
  }
  
  console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy"));

  // use match next time :)

  let k="The30quick20brown10f0x1203jumps914ov3r1349the102l4zy".match(/\d+/g);

  console.log(k)

  