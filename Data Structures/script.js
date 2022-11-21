"use strict";

//PROBLEM 1
//FIRST SOLUTION USING ARRAYS

let array1 = [3,1,7,9];
let array2 = [2,4,1,9,3];
let array3 = array1.concat(array2);
// console.log(array3)

    console.log("SOLUTION USING ARRAYS");
    
    //function to calculate distinct elements in two sets
    function distinctElements(arr1, arr2){
        let finalFilter;

        //filter through the array and find the distinct elements
        const output = arr2.filter(function (obj) {
            finalFilter = arr1.indexOf(obj) === -1;
            return finalFilter;
        });
        console.log("The common elements are", output);
    
    //sum of all elements inside the new filteredArray
    let sum = 0;
        for(let i=0; i<output.length; i++){
            sum += output[i];
    }
    let finalSum = sum;  
    return finalSum
    }
    
    // console.log(distinctElements(array1, array2));
    // console.log(distinctElements(array2, array1));
    
    let finalOutput = (distinctElements(array1, array2) + distinctElements(array2, array1));
    
    console.log("The final sum is", finalOutput);
    
    
    