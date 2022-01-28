/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. 

https://www.codewars.com/kata/54a91a4883a7de5d7800009c
*/

function incrementString (str) {
    const arr1=str.split("");
    console.log(arr1);
    const numArr=[];
    
    const letters=[];
    
    for(let i=0;i<arr1.length;i++){
        if((Number(arr1[i]))>=0){
            numArr.push(Number(arr1[i]));        
        }
        else {
            letters.push(arr1[i]);
        }
        
    }
    console.log(letters);
    console.log(numArr);
    let num=numArr.join("");
    let incrementedNum=Number(num)+1;
    let k;
    if(String(num).length>String(incrementedNum).length){
        k=String(num).length-String(incrementedNum).length;
        console.log(k);
    }

    for(let i=0;i<k;i++){
        incrementedNum="0"+incrementedNum;
        
    }
  
    console.log(num);
    console.log(incrementedNum);
    let result=letters.join("")+incrementedNum;

    return result;
}


  console.log(incrementString("nice000000089"))