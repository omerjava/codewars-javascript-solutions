/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [arr=[]] - The array to inspect.
 * @param {Array} [toRemove=[]] - The values to exclude.
 * @returns {Array} [result] - Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */

// Hack Your Future exercise

 function arrayDiff(arr = [], toRemove = []) {
    const result = [];
    for (let element of arr) {
      if (!toRemove.includes(element) && !result.includes(element))
        result.push(element);
    }
    return result;
  }
  
  console.log("solution:", arrayDiff([1, 2, "t", 2, 3, 3, 4, 5, 5, 5], [3, 4]));
  // output: [1, 2, 't', 5]

  function arrayDiff2(arr = [], toRemove = []) {
    const result=arr.filter((v,i,a) => !toRemove.includes(v));
    const last=[];
    result.map(v => {if(!last.includes(v)) last.push(v);});
    return last;
  }
  
  console.log("solution 2:", arrayDiff2([1, 2, "t", 2, 3, 3, 4, 5, 5, 5], [3, 4]));
  // output: [1, 2, 't', 5]
  
  