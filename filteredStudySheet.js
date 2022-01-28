
let filtered = [12, 5, 8, 130, 44].filter(value => value>10);
let filtered1 = [12, 5, 8, 130, 44].filter((value, index, array) => array[index]>10);
let filtered2 = [12, 5, 8, 130, 44].filter(function(value){return value>10;});
let filtered3 = [12, 5, 8, 130, 44].filter((value) => {return value%2===0;});
let filtered4 = [12, 5, 8, 130, 44].filter(value => value%2===0);
let filtered5 = ["car", "var", "mean", "red", "hot"].filter(value => value.includes("a"));
let filtered6 = ["car", "var", "mean", "red", "hot"].filter(value => value.length===4);
let filtered7 = ["car", "var", "mean", "red", "hot"].filter(value => !value.includes("e"));
let filtered8 = ["car", "var", "mean", 5, 6, 7, NaN, null, "red", "hot"].filter(value => typeof value==="number");

console.log(filtered);
console.log("Filtered1: ", filtered1);
console.log(filtered2);
console.log(filtered3);
console.log(filtered4);
console.log(filtered5);
console.log(filtered6);
console.log(filtered7);
console.log(filtered8);


let mapped = [12, 5, 8, 130, 44].map(value => value*2);
let mapped2 = [12, 5, 8, 130, 44].map((element, index) => (element*2)+index);
let mapped3 = [12, 5, 8, 130, 44].map((element, index, array) => (element*2)+index+array);
let mapped4 = [12, 5, 8, 130, 44].map((element, index, array) => (element*2)+array[index]);
let mapped5 = ["a", "b", "c", "d"].map(value => value+25);
let mapped6 = ["a", "b", "c", "d"].map((value, index, array) => value+array[index]);
let mapped7 = ["a", "b", "c", "d"].map((value, index) => value+index);




console.log(mapped);
console.log(mapped2);
console.log(mapped3);
console.log(mapped4);
console.log(mapped5);
console.log(mapped6);
console.log(mapped7);


let reduced = [13, 2, 4, 1, 9, 23].reduce((total, value) => total+=value);
let reduced2 = [13, 2, 4, 1, 9, 23].reduce((result, value) => result*=value);
let reduced3 = [1,2,3,4,5,6].reduce((result, value) => result*=value);
let arr = "The reduce() method returns a single value: the function's accumulated result.".split(" ");
let reduced4 = arr.reduce((result, value) => result+=" "+value);
let reduced5 = [13, 2, 4, 1, 9, 23].filter(value => value%2===0).reduce((result, value) => result+=value);
let reduced6 = [13, 2, 4, 1, 9, 23].map(value => value-5).filter(value => value%2===0).reduce((result, value) => result+=value);
let reduced7 = arr.filter(value => !value.includes("r")).map(value => value+" ").reduce((concat, value) => concat+=value);



console.log("Reduced: ", reduced);
console.log("Reduced2: ", reduced2);
console.log("Reduced3: 6! => ", reduced3);
console.log(arr);
console.log("Reduced4: ", reduced4);
console.log("Reduced5: ", reduced5);
console.log("Reduced6: ", reduced6);
console.log("Reduced7: ", reduced7);





