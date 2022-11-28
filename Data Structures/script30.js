"use strict";

const arr = [-5,2,10,4,6];

// test cases 10,6,20
let t = 20;

function targetArr(params){
    let myIndex;

    for(let i=0; i<params.length; i++){
        if(t === params[i]){
            myIndex = params.indexOf(t);
        } else {
            myIndex = -1;
        }
    }

    return myIndex;
}

console.log(`The target index = ${targetArr(arr)}`);