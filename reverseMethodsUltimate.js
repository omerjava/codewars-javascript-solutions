
const reverseMap=a=>a.map((v,i,arr)=>v=arr[arr.length-1-i])

console.log(reverseMap([5,7,2,"re", 6])); // output : [6, 're', 2, 7, 5]

const reverseReverse=a=>a.reverse();

const reverseSort=a=>a.sort(q=>2); //not working

const reverseMapStr=str=>str.split("").map((v,i,arr)=>v=arr[arr.length-1-i]).join("");

const reverseReduceStr=str=>str.split("").reduce((acc,v,i,arr)=>acc+=arr[arr.length-1-i],"")

console.log(reverseReduceStr("stringReverseHello")); // output : olleHesreveRgnirts

console.log(reverseSort([5,7,2,7, 6])); // output : [5, 7, 2, 7, 6]




