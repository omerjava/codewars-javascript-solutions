/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']  

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
*/

function solution(str){

    let arr=str.split("");
    console.log(arr);
    if(arr.length%2!==0){
        arr.push("_");
    }
    console.log(arr);
    const newArr=[];
    for(let i=0; i<arr.length;i+=2){
        let k= arr[i]+arr[i+1];
        newArr.push(k);
    }
    return newArr;
}

console.log(solution("cursio345sdfues"));

function solution2(s){
    return (s+"_").match(/.{2}/g)||[]
 }

 console.log(solution2("cursio345sdfues"));