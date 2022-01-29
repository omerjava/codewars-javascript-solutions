// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/java
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty, and you do not need to account for different data types.

function findShort(str) {
  const words = str.split(" ");
  let minWordsLength = 0;
  for (let i = 0; i < words.length; i++) {
    let check = true;
    for (let j = i + 1; j < words.length; j++) {
      check = check && words[i].length - words[j].length < 0;
    }
    if (check) {
      minWordsLength = words[i].length;
      break;
    }
  }
  return minWordsLength;
}

const solution2= str => str.split(" ").map(v=>v.length).reduce((t,v,i,arr)=>Math.min(...arr));

const solution3= str => {
    const wordsLength=str.split(" ").map(v=>v.length);
    return Math.min(...wordsLength);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //output: 3
console.log(solution2("bitcoin take over the world maybe who knows perhaps")); //output: 3
console.log(solution3("bitcoin take over the world maybe who knows perhaps")); //output: 3