"use strict";

let arr = [1,-2,3,-4,5,-6];

//find the negative numbers in an array
function negativeNums(params){
    let newArr = [];

    for(let i=0; i<params.length; i++){
        if(params[i] < 0){
            newArr.push(params[i]);
        }
    }

    return newArr;
}

console.log(negativeNums(arr));