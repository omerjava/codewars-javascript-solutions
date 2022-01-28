/* https://www.codewars.com/kata/5262119038c0985a5b00029f

Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  // false 
is_prime(2)  // true  
is_prime(-1) // false 

*/

/**
 * Given a number, the function will test whether this number is a prime number.
 *
 * @param {number} num - The number which will be checked whether prime or not.
 * @returns {boolean} - It will return true if the number is prime, otherwise false.
 */
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    let n = Math.sqrt(num);
    for (let i = 2; i < n + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPrime(100));
// output: false

console.log(isPrime(296797));
// output: true
