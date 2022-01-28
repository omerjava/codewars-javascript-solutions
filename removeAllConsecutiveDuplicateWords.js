/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript */

const removeConsecutiveDuplicates = sentence => {
    const arr=sentence.split(" ");
    const result=[];
    result[0]=arr[0];
    for(let i=0; i<arr.length; i++){
        if(i===arr.length-1) break;
        if(arr[i+1]!==arr[i]){
            result.push(arr[i+1]);
        }
    }
    //console.log(arr);
    return result.join(" ");
}

const removeConsecutiveDuplicatesRefactored = sentence => {
    const arr=sentence.split(" ");
    const result=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i-1]) result.push(arr[i]);
    }
    return result.join(" ");
}

const removeConsecutiveDuplicates2 = s => s.split(" ").filter((x,i,arr) => x!==arr[i-1]).join(" ");

const removeConsecutiveDuplicates3 = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1');


const k=removeConsecutiveDuplicates3("Hello, my name is is John. His name is Jack.");
console.log(k);
const m=removeConsecutiveDuplicates3("gap gap new red red red yes yes");
console.log(m);
const n=removeConsecutiveDuplicates3("blue blue ca car car black car black blck");
console.log(n);