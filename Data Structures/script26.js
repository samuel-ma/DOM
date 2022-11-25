"use strict";

//first pair of arrays
let v1 = [-5,5,7,4];
let v2 = [1,1,0,0];

//second pair of arrays
let v3 = [2,6];
let v4 = [4,1];

//function to multiple and sum two arrays
function dot_product(params, params2){
    let result = 0;

    for (var i=0; i < params.length; i++) {
    result += (params[i] * params2[i]);
    }
    return result;
}

//function to console log whether the arrays are orthogonal or not
function isOrthogonal(params1, params2){
    let params = dot_product(params1, params2);
    // console.log(params);

    if(params === 0){
        console.log(`[${params1}] and [${params2}] === ${params}`);
        console.log(`The two vectors are orthogonal`);
    } else if (params !== 0){
        console.log(`[${params1}] and [${params2}] === ${params}`);
        console.log(`The two vectors are not orthogonal`);
    }
}

let firstPair = isOrthogonal(v1,v2);
let secondPair = isOrthogonal(v3,v4);