https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript



function findUniq(arr) {  
    return Number(arr.filter((v,i,a)=>a.indexOf(v)===a.lastIndexOf(v)).join(""));
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));
console.log(findUniq([1]));
  