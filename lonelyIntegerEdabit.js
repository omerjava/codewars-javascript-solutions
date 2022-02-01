/*lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// 3 has no matching negative appearance.

lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// -4 has no matching positive appearance.

lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9*/

// https://edabit.com/challenge/fK8a63ttMnt9CZmhg

function lonelyInteger(arr){
    return arr.filter((v,i,array)=>(!array.includes(v*-1)))[0];
}

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));