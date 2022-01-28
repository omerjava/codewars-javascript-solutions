/* Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
Notes */

function sevenBoom(arr) {
	//if(arr.includes(7)) return "Boom!"; //we checked whether 7 is included in a given array
	let k=arr.join(""); //we used join method to combine all array elements as a single string
	if(k.includes(7)) return "Boom!"; //we checked whether our string (k) contains 7 or not
	else return "there is no 7 in the array"; //in any other cases it should return no 7 founded
	
}

console.log(sevenBoom([2,3,87,5]));