/* Create a function called addArrays() that combines two arrays of equal length, 
summing each element of the first with the corresponding element in the second, 
returning the "combined" summed array.
Raise an error if input arguments are not of equal length.

addArrays([1,2],[4,5]); // => [5,7]
addArrays([1,2,3],[4,5]); // => Error
Note:
Expect array input to either contain numbers or strings only
The function should also allow for concatenating string

addArrays(["a"],["b"]) // => ["ab"] */

function addArrays(array1, array2) {
    const result = [];
    if(array1.length===array2.length){
        for(let i=0; i<array1.length; i++){
            let k=array1[i]+array2[i];
            result.push(k);
        }
    }
    else if(array1.length!==array2.length){
        throw new Error();
    }
    return result;
}
//console.log(addArrays(["a"],["b"]));
//console.log(addArrays([1,2],[4,5]));
console.log(addArrays([1,2],[4,5]));

function addArrays2(a1, a2) {
    if (a1.length !== a2.length) throw new Error();
    return a1.map((v, i) => v + a2[i]);
  }
  
  console.log(addArrays2([1,3],[4,5]));