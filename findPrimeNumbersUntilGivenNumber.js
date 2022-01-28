/* We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11] 

https://www.codewars.com/kata/521ef596c106a935c0000519/train/javascript 
*/


function isPrime(x){
    if(x<2) return false;
    const divisors=[];
    let y=Math.sqrt(x);
    for(let i=2; i<=y; i++){
        divisors.push(i);
    }
    if(divisors.every(v => x%v!==0)) return true;
    else return false;
}
function prime(num) {
    const result=[];
    for(let i=2; i<=num; i++){
        isPrime(i)?result.push(i):false;
    }
    return result;
}


console.log(prime(983));