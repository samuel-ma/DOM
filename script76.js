"use strict";

/*
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    3 --> 1+ 1/4 + 1/7 --> "1.39"
    4 --> 1 + 1/4 + 1/7 + 1/10 --> "1.49"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n){

    let final;

    if(n === 1){
        return "1.00";
    } else if(n === 2){
        return "1.25";
    }

    for(let i=1.25; i<=n; i++){
        final = (i + 0.11);
    }

    return final;
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));

