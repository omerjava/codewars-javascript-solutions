
const reverseSplitJoin=str=>str.split("").reverse().join("");

console.log(reverseSplitJoin("reverse1"));

const reverseForLoop=str=>{
    let reversed="";
    for(let i=str.length-1; i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}

console.log(reverseForLoop("reverse2"));

const reverseMapStr=str=>str.split("").map((v,i,arr)=>v=arr[arr.length-1-i]).join("");

console.log(reverseMapStr("reverse3"));

const reverseReduceStr=str=>str.split("").reduce((acc,v,i,arr)=>acc+=arr[arr.length-1-i],"")

console.log(reverseReduceStr("reverse4")); 

const reverseMapArray=a=>a.map((v,i,arr)=>v=arr[arr.length-1-i])

console.log(reverseMapArray([5,7,2,"re", 6, "Reverse array with map()"])); // output : [6, 're', 2, 7, 5]

const reverseReverseArray=a=>a.reverse();

console.log(reverseReverseArray([5,7,2,"re", 6, "Reverse array with reverse()"]));

const reverseSort=a=>a.sort(q=>2); //not working

console.log(reverseSort([5,7,2,7, 6])); // output : [5, 7, 2, 7, 6]




