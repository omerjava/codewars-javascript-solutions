/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. 

https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

function getCount(str) {
    const vowels=["a","e","i","o","u","A","E","I","O","U"];
    let vowelsCount = 0;

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            vowelsCount++;
        }
    }

    return vowelsCount;
    
  }

  console.log(getCount("dAAuoisudoasudoiasd"));

  function getCount2(str) {
    var vowelsCount = [];
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length:0;
  }

  console.log(getCount2("idofuoisdufos"));

