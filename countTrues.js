
const arr2=[true, true, false, false, true];
let i;
let counter=0;


function countTrue(arr) {
    
        for(i=0; i<arr.length; i++){
                if(arr[i]===true){
                    counter++;	
                }
            }
       
        return counter;
    }

    console.log(countTrue(arr2));