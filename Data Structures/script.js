"use strict";

//PROBLEM 1
//FIRST SOLUTION USING (ARRAYS)
const array1 = [3,1,7,9];
const array2 = [2,4,1,9,3];

    console.log("PROBLEM 1")
    console.log("SOLUTION USING ARRAYS");
    
    //function to calculate distinct elements in two sets
    function distinctElements(arr1, arr2){
        let finalFilter;

        //filter through the array and find the distinct elements
        const output = arr2.filter(function (obj) {
            finalFilter = arr1.indexOf(obj) === -1;
            return finalFilter;
        });
        console.log("The distinct elements are", output);
    
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
    
    


    



    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);
    console.log(`            ||              `);









//PROBLEM 1
//SECOND SOLUTION USING (OBJECTS)
console.log(`SOLUTION USING OBJECTS`);

const obj1 = {
    arr1: [3,1,7,9]
  };

const obj2 = {
    arr2: [2,4,1,9,3]
  };

let value1 = Object.values(obj1);
let finalV1 = value1[0];
// console.log(finalV1);

let value2 = Object.values(obj2);
let finalV2 = value2[0];
// console.log(finalV2);



// find the distinct values
function distinctElem(arrr1, arrr2){
    let finalArr = arrr2.filter(function(obj){
    return arrr1.indexOf(obj) === -1;
})
    console.log("The distinct elements are", finalArr);
    
    //sum up the entire array
    let sum = 0;
    for(let i=0; i<finalArr.length; i++){
        sum += finalArr[i];
    }
    
    let finalSum = sum;
    // console.log(finalSum);
    return finalSum;
}

let finalS1 = distinctElem(finalV1, finalV2);
let finalS2 = distinctElem(finalV2, finalV1);

//calculate the finalSum
let finalAm = finalS1 + finalS2;
console.log("The final sum is", finalAm);


    
    
    






console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);









//PROBLEM 2
//SOLUTION USING ARRAYS
const arr1 = [12,13,6,10];
const arr2 = [13,10,16,15];

    console.log("PROBLEM 2")
    console.log("SOLUTION USING ARRAYS");
    
    //function to calculate distinct elements in two sets
    function compareArrays(params1, params2){
        let finalArrr = params2.filter(function(obj){
        return params1.indexOf(obj) !== -1;
    })
        console.log("The common elements are", finalArrr);
        
        //sum up the entire array
        let sum = 0;
        for(let i=0; i<finalArrr.length; i++){
            sum += finalArrr[i];
        }
        
        let finalSum = sum;
        // console.log(finalSum);
        return finalSum;
    }
    
    let finalSum1 = compareArrays(arr1, arr2);
    let finalSum2 = compareArrays(arr2, arr1);
    
    //calculate the finalSum
    let finalAmount = finalSum1 + finalSum2;
    console.log("The sum of common elements is", finalAmount);

    
    
    






console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);
console.log(`            ||              `);








//PROBLEM 2
//SECOND SOLUTION USING (OBJECTS)
console.log(`SOLUTION USING OBJECTS`);

const ob1 = {
    arr1: [12,13,6,10]
  };

const ob2 = {
    arr2: [13,10,16,15]
  };

let val1 = Object.values(ob1);
let V1 = val1[0];
// console.log(finalV1);

let val2 = Object.values(ob2);
let V2 = val2[0];
// console.log(finalV2);



// find the distinct values
function compareArr(arrr1, arrr2){
    let finalArr = arrr2.filter(function(obj){
    return arrr1.indexOf(obj) !== -1;
})
    console.log("The common elements are", finalArr);
    
    //sum up the entire array
    let sum = 0;
    for(let i=0; i<finalArr.length; i++){
        sum += finalArr[i];
    }
    
    let finalSum = sum;
    // console.log(finalSum);
    return finalSum;
}

let S1 = compareArr(V1, V2);
let S2 = compareArr(V2, V1);

//calculate the finalSum
let Am = S1 + S2;
console.log("The sum of common elements is", Am);



