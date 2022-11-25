"use strict";

/*
    EXPLANATION (Procedural Programming Checkpoint):

    Write a procedure/function to determine whether two given vectors are orthogonal or not

    a) Orthogonal
    b) Not orthogonal.

    a)  If the dot product of two vectors is zero, then the two vectors are orthogonal.
    
    The given vectors are:
    v1 = [-5,5,7,4];
    v2 = [1,1,0,0];

    v1 . v2 = -5 * 1 + 5 * 1 + 7 * 0 + 4 * 0
    v1 . v2 = -5 + 5 + 0 + 0
    v1 . v2 = 0
    These two vectors are orthogonal.

    b)  The second pair of vectors are:
    v1 = [2, 6];
    v2 = [4, 1];

    v1 . v2 = 2 * 4 + 6 * 1
    v1 . v2 = 8 + 6
    v1. v2 =  14
    This pair is not orthogonal.

*/


//SOLUTION

//first pair of arrays
let v1 = [-5,5,7,4];
let v2 = [1,1,0,0];

//second pair of arrays
let v3 = [2,6];
let v4 = [4,1];

//function to multiple and sum two arrays
function accessElem(params, params2){
    let result = 0;

    for (var i=0; i < params.length; i++) {
    result += (params[i] * params2[i]);
    }
    return result;
}

//function to console log whether the arrays are orthogonal or not
function isOrthogonal(params1, params2){
    let params = accessElem(params1, params2);
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
