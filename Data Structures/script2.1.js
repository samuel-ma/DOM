"use strict";

//SOLUTION USING HASH TABLES
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

//single array of both elements
let joinedArr = finalV1.concat(finalV2);
// console.log(joinedArr);



// find the distinct values
function compareArrays(arrr1, arrr2){
    let finalArr = arrr2.filter(function(obj){
    return arrr1.indexOf(obj) === -1;
})
    console.log("The overlapping elements are", finalArr);
    
    //sum up the entire array
    let sum = 0;
    for(let i=0; i<finalArr.length; i++){
        sum += finalArr[i];
    }
    
    let finalSum = sum;
    // console.log(finalSum);
    return finalSum;
}

let finalSum1 = compareArrays(finalV1, finalV2);
let finalSum2 = compareArrays(finalV2, finalV1);

//calculate the finalSum
let finalAmount = finalSum1 + finalSum2;
console.log("The sum of overlapping elements is", finalAmount);