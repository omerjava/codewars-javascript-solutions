        /*
        1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4,
        15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

        Task
        Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their
        squared divisors is itself a square.

        We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays
        (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square
        and then the sum of the squared divisors.

        Example:
        list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
        list_squared(42, 250) --> [[42, 2500], [246, 84100]]
        The form of the examples may change according to the language, see "Sample Tests".
        https://www.codewars.com/kata/55aa075506463dac6600010d/train/java
         */

    function listSquared(m, n){    
        const result=[];
        for(let i=m; i<n+1; i++){
            if(isSpecialNumber(i)){
                result.push([i, isSpecialNumber(i)]);
            }
        }
        return result;
    }
    function isSpecialNumber(num){
        const numbers=[];
        for(let i=1; i<num+1; i++){
            if(num===i*i) numbers.push(i);
            else if(num%i===0 && !numbers.includes(i)){
                numbers.push(i, num/i);
            }
        }
        let squaredSum= numbers.map(v => v*v).reduce((acc,v) => (acc+=v),0);
        return Math.sqrt(squaredSum)%1===0 ? squaredSum : false;
    }
  

    console.log(isSpecialNumber(49));
    console.log(isSpecialNumber(42));

    console.log(listSquared(1, 250));