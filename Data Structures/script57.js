

"use strict";

/*
    Input: 42145 - - - - Output: 54421
    Input: 145263 - - - - Output: 654321
    Input: 123456789 - - - - Output: 987654321
*/

function descendingOrder(n){

    let splitNum = n.split("");
    console.log(splitNum);

    //
    for(let i=0; i<n.length; i++){

    }

}

let n = 42145;

let splitNum = n.toString().split("");
console.log(splitNum);

let sortNum = splitNum.sort(function(a,b){
    return b-a;
});
console.log(sortNum);

let descNum = sortNum.join("");
console.log(descNum);