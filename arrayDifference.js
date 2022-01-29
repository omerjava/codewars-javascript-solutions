//   https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
    

/**
 * Given two arrays as argument, the function removes all elements in the first array which are 
 * available also in second array. 
 *
 * @param {array} a - The array which its elements that are available in array b should be removed.
 * @param {array} b - The array which its elements will be compared with array a.
 * @returns {array} - An array which contains the elements of array a which are not available in array b.
 */

    function arrayDiff(a, b) {
        const result=[];
        for(let element of a){    
            if(!b.includes(element)) result.push(element);
        }
        return result;
    }

    console.log(arrayDiff([1,2,"t",2,3],[3]));
    console.log(arrayDiff([], [4,5]));
    console.log(arrayDiff([1,"f",8,"e",2], ["e"]));
    console.log(arrayDiff([1,2,2,2,3,3],[2]));