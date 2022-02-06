        /*      Task
        You will be given an array of numbers. You have to sort the odd numbers in ascending order
        while leaving the even numbers at their original positions.

        Examples
        [7, 1]  =>  [1, 7]
        [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
        https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/java
         */

        function sortOddNumber(arr){
            const oddNumbers=[];
            const indexOfOddNumbers=[];
            for(let i=0; i<arr.length; i++){
                if(arr[i]%2!==0){
                   oddNumbers.push(arr[i]);
                   indexOfOddNumbers.push(i);
                }
            }
            const sorted=oddNumbers.sort(function(a,b){return a-b});
            for(let i=0; i<sorted.length; i++){
                arr[indexOfOddNumbers[i]]=sorted[i];
            }  
            return arr;
        }

        console.log(sortOddNumber([5, 8, 6, 3, 4, 7]));
