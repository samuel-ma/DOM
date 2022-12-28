"use strict";

/*
    Sam Harris => S.H
    patrick feeney => P.F
*/

let myName = "Sam Harris";

function abbrevName(myName){
    const final = myName.split(" ").map((item) => {
        return item[0];
    });

    return final.join(".");
}

console.log(abbrevName(myName));