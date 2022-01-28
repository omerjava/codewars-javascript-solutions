/*lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// 3 has no matching negative appearance.

lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// -4 has no matching positive appearance.

lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9*/

// not completed

function lonelyInteger(arr){
    const newArr=[];
    for(let element of arr){
        if(element<0){
            newArr.push(element*-1);
        }
        else{
            newArr.push(element);
        }
    }
    for(let element of newArr){
        if(newArr.indexOf(element)===newArr.lastIndexOf(element)){
            return arr.includes(element)?element:element*-1;
        }
    }
}

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));