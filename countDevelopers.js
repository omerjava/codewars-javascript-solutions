
// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
// Your task is to return the number of JavaScript developers coming from Europe.

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

function countDevelopers(list) {
    let result=0;
    for(let i=0; i<list.length; i++){
        if(list[i].continent==="Europe"&&list[i].language==="JavaScript"){
            result++;
        }
    }
    return result;  
}

let countDevelopers2 = list => list.filter(v => v.continent==="Europe" && v.language==="JavaScript").length; 
let countDevelopers3 = list => 
    list.reduce((acc,v) => {if(v.continent==="Europe" && v.language==="JavaScript") {acc++;} return acc;},0); 


console.log(countDevelopers(list1));
console.log(countDevelopers2(list1));
console.log(countDevelopers3(list1));

