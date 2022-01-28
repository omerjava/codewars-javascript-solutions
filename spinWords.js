/*Write a function that takes in a string of one or more words, and returns the same string, but with 
all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist 
of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") 
=> returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" 

https://www.codewars.com/kata/5264d2b162488dc400000001
*/

function spinWords(string){
    const strArr=string.split(" ");
    console.log(strArr);
    const newStrArr=[];
    for(let i=0;i<strArr.length;i++){
         if(strArr[i].length>=5){
            let reversedWord=strArr[i].split("").reverse().join("");
            newStrArr.push(reversedWord);
        }
        else{
            newStrArr.push(strArr[i]);
        }
    }
    return newStrArr.join(" ");
}

console.log(spinWords("What are you doing my friend?"));