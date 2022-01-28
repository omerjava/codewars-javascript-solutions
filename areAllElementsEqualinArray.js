// Are all elements of the given array equal?

const arr2=[1,1,2,3,4];
const arr3=[1,1,1,1];

function myFunction(arr) {
  
    for(let i=0; i<arr.length; i++){
          for(let j=1; j<arr.length; j++){
             if(arr[i]!==arr[j]){
                 return false;  
             }
          }
       }
    
    return true;
 }

 console.log(myFunction(arr2));