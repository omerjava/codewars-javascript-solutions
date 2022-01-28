/* Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string 
in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of 
the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any 
redundant trailing whitespace: you can use dynamically allocated character strings. 

https://www.codewars.com/kata/54d496788776e49e6b00052f
*/

function isPrime(n){
    let m=Math.abs(n);
    if(m===1&&m===0){
        return false;
    }
    for(let i=2; i<m; i++){
        if(m%i===0){
            return false;
        }
    }
    return true;
}
function factor(k){
    let x=Math.abs(k);
    const factors=[];
    const primeFactors=[];
    for(let i=1; i<x; i++){
        if(x%i===0){
            let f=x/i;
            factors.push(f);
        }  
    }
    for(let i=0; i<factors.length; i++){
        if(isPrime(factors[i])===true){
            primeFactors.push(factors[i]);
        }
    }
    //console.log(primeFactors);
    return primeFactors;
}
function sumOfDividedNum(n, numbers){
    const arrSum=[Number(n)];
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%n===0){
            sum+=numbers[i];
        }
    }
    arrSum.push(sum);
    return arrSum;
}
function sumOfDivided(list) {
   const primeFac=[];
   const primeFac3=[];
   for(let i=0; i<list.length; i++){
       if(factor(list[i])!==[]){
       primeFac.push(factor(list[i]));}
       //console.log(factor(list[i]));
   }
   console.log(primeFac);
   
   const primeFac2=primeFac.join(",").split(",");
   console.log(primeFac2);
   for(let i=0; i<primeFac2.length; i++){
        if(!primeFac3.includes(primeFac2[i])){
            primeFac3.push(primeFac2[i]);
        }
    }
    const sortedPrimes=primeFac3.sort(function(a, b){return a-b});
    const result=[];
    
    if(sortedPrimes.includes("")){
        sortedPrimes.shift();
    }
    //console.log(sortedPrimes);
    for(let i=0; i<sortedPrimes.length; i++){
        result.push(sumOfDividedNum(sortedPrimes[i], list));
        console.log(sumOfDividedNum(sortedPrimes[i], list));
    }
    
    return result;
}
 
//console.log(sumOfDividedNum(5, [15,21,24,30,45]));
console.log(factor(17));
console.log(sumOfDivided([17,-17,51,-51,107]));